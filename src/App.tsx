import { useEffect, useMemo, useState } from "react"
import { roadmap, type RoadmapTask } from "./data/roadmap"

const roadmapStart = new Date(2026, 8, 8)

function getDayNumber(date: Date) {
  const start = new Date(roadmapStart)
  start.setHours(0, 0, 0, 0)

  const current = new Date(date)
  current.setHours(0, 0, 0, 0)

  const difference = current.getTime() - start.getTime()

  return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function App() {
  const [selectedDate, setSelectedDate] = useState(() => new Date())

  const [calendarMonth, setCalendarMonth] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })

  const dayNumber = getDayNumber(selectedDate)

  const selectedRoadmapDay = roadmap.find(
    (day) => day.day === dayNumber
  )

  const [timerSeconds, setTimerSeconds] = useState(50 * 60)
  const [timerRunning, setTimerRunning] = useState(false)

  useEffect(() => {
    if (!timerRunning) return

    const interval = window.setInterval(() => {
      setTimerSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(interval)
          setTimerRunning(false)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [timerRunning])

  const formatTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`
  }

  const resetTimer = () => {
    setTimerRunning(false)
    setTimerSeconds(50 * 60)
  }

  const [completedTasks, setCompletedTasks] = useState<
    Record<string, boolean>
  >(() => {
    try {
      const saved = localStorage.getItem("nasib-roadmap-completed")
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(
      "nasib-roadmap-completed",
      JSON.stringify(completedTasks)
    )
  }, [completedTasks])

  const tasks: RoadmapTask[] = selectedRoadmapDay?.tasks ?? []

  const toggleTask = (taskId: string) => {
    setCompletedTasks((current) => ({
      ...current,
      [taskId]: !current[taskId],
    }))
  }

  const completedCount = tasks.filter(
    (task) => completedTasks[task.id] ?? task.completed
  ).length

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedCount / tasks.length) * 100)

  const allTasks = roadmap.flatMap((day) => day.tasks)

  const completedRoadmapTasks = allTasks.filter(
    (task) => completedTasks[task.id] ?? task.completed
  ).length

  const overallProgress =
    allTasks.length === 0
      ? 0
      : Math.round(
          (completedRoadmapTasks / allTasks.length) * 100
        )

  const completedDays = roadmap.filter(
    (day) =>
      day.tasks.length > 0 &&
      day.tasks.every(
        (task) => completedTasks[task.id] ?? task.completed
      )
  ).length

  const currentPhaseDays = selectedRoadmapDay
    ? roadmap.filter(
        (day) => day.phase === selectedRoadmapDay.phase
      )
    : []

  const completedPhaseDays = currentPhaseDays.filter(
    (day) =>
      day.tasks.length > 0 &&
      day.tasks.every(
        (task) => completedTasks[task.id] ?? task.completed
      )
  ).length

  const phaseProgress =
    currentPhaseDays.length === 0
      ? 0
      : Math.round(
          (completedPhaseDays / currentPhaseDays.length) * 100
        )

  const getDateKey = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`

  const completedDateKeys = new Set(
    roadmap
      .filter(
        (day) =>
          day.tasks.length > 0 &&
          day.tasks.every(
            (task) => completedTasks[task.id] ?? task.completed
          )
      )
      .map((day) => {
        const date = new Date(roadmapStart)
        date.setDate(date.getDate() + day.day - 1)
        return getDateKey(date)
      })
  )

  let currentStreak = 0
  const streakCursor = new Date()

  while (
    getDayNumber(streakCursor) >= 1 &&
    getDayNumber(streakCursor) <= roadmap.length &&
    completedDateKeys.has(getDateKey(streakCursor))
  ) {
    currentStreak++
    streakCursor.setDate(streakCursor.getDate() - 1)
  }

  let bestStreak = 0
  let runningStreak = 0

  for (let i = 1; i <= roadmap.length; i++) {
    const date = new Date(roadmapStart)
    date.setDate(date.getDate() + i - 1)

    if (completedDateKeys.has(getDateKey(date))) {
      runningStreak++
      bestStreak = Math.max(bestStreak, runningStreak)
    } else {
      runningStreak = 0
    }
  }

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear()
    const month = calendarMonth.getMonth()

    const firstDay = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const mondayOffset = (firstDay.getDay() + 6) % 7

    const days: (Date | null)[] = []

    for (let i = 0; i < mondayOffset; i++) {
      days.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }, [calendarMonth])

  const previousMonth = () => {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() - 1,
        1
      )
    )
  }

  const nextMonth = () => {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() + 1,
        1
      )
    )
  }

  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()

  const isValidRoadmapDay = (date: Date) => {
    const number = getDayNumber(date)

    return number >= 1 && number <= 153
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-gray-800 bg-gray-900 p-6 md:block">
          <h1 className="text-2xl font-bold tracking-wide">
            NASIB
          </h1>

          <p className="mb-10 text-sm text-gray-400">
            ROADMAP
          </p>

          <nav className="space-y-3">
            <button className="w-full rounded-lg bg-gray-800 px-4 py-3 text-left">
              Dashboard
            </button>

            <button className="w-full rounded-lg px-4 py-3 text-left text-gray-400 transition hover:bg-gray-800 hover:text-white">
              Calendar
            </button>

            <button className="w-full rounded-lg px-4 py-3 text-left text-gray-400 transition hover:bg-gray-800 hover:text-white">
              Roadmap
            </button>

            <button className="w-full rounded-lg px-4 py-3 text-left text-gray-400 transition hover:bg-gray-800 hover:text-white">
              Progress
            </button>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-8">
          <div className="mx-auto max-w-7xl">

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <p className="text-sm text-gray-400">
                  {formatDate(selectedDate)}
                </p>

                {isSameDate(selectedDate, new Date()) && (
                  <span className="rounded-full border border-gray-700 bg-gray-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                    Today
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-3">
                <h2 className="text-4xl font-bold">
                  Day {dayNumber}
                </h2>

                <span className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs text-gray-300">
                  of 153
                </span>
              </div>

              <p className="mt-2 text-gray-400">
                {selectedRoadmapDay?.phase ?? "No roadmap data for this day yet."}
              </p>
            </div>

            {/* Progress */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm text-gray-400">
                  Overall Roadmap
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {completedDays}/153
                </p>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-300"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {overallProgress}% complete
                </p>
              </div>


              <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm text-gray-400">
                  Roadmap Day
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {dayNumber}/153
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm text-gray-400">
                  Current Phase
                </p>

                <p className="mt-2 text-xl font-bold">
                  {selectedRoadmapDay?.phase ?? "Not available"}
                </p>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-300"
                    style={{ width: `${phaseProgress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {completedPhaseDays}/{currentPhaseDays.length} days · {phaseProgress}% complete
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm text-gray-400">
                  Streak
                </p>

                <p className="mt-2 text-3xl font-bold">
                  🔥 {currentStreak}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Best streak: {bestStreak}
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm text-gray-400">
                  Day Progress
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {progress}%
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {completedCount}/{tasks.length} tasks
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-sm text-gray-400">
                  Current Phase
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {selectedRoadmapDay?.phase ?? "Not added"}
                </p>
              </div>

            </div>

            {/* Study Timer */}
            <section className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="flex flex-col items-center text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Study Timer
                </p>

                <p className="mt-3 text-6xl font-bold tracking-tight">
                  {formatTimer(timerSeconds)}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  50-minute focused study session
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setTimerRunning((running) => !running)}
                    className="rounded-lg bg-white px-5 py-2.5 font-semibold text-black transition hover:bg-gray-200"
                  >
                    {timerRunning ? "Pause" : timerSeconds === 0 ? "Start Again" : "Start"}
                  </button>

                  <button
                    onClick={resetTimer}
                    className="rounded-lg border border-gray-700 px-5 py-2.5 text-gray-200 transition hover:bg-gray-800"
                  >
                    Reset
                  </button>
                </div>

                {timerSeconds === 0 && (
                  <p className="mt-4 text-sm font-semibold text-gray-300">
                    ✅ Study session complete
                  </p>
                )}
              </div>
            </section>

            {/* Tasks / Roadmap */}
            <section className="rounded-xl border border-gray-800 bg-gray-900 p-6">

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Day {dayNumber} Tasks
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {selectedRoadmapDay
                    ? `Phase: ${selectedRoadmapDay.phase}`
                    : "This day has not been added yet."}
                </p>
              </div>

              {tasks.length === 0 ? (
                <div className="rounded-lg border border-dashed border-gray-700 bg-gray-950 p-8 text-center">
                  <p className="text-gray-400">
                    No tasks have been added for Day {dayNumber} yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {tasks.map((task) => {
                    const isCompleted =
                      completedTasks[task.id] ?? task.completed

                    return (
                      <button
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="flex w-full items-start gap-4 rounded-lg border border-gray-800 bg-gray-950 p-4 text-left transition hover:border-gray-600"
                      >
                        <div
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                            isCompleted
                              ? "border-white bg-white text-black"
                              : "border-gray-600"
                          }`}
                        >
                          {isCompleted && "✓"}
                        </div>

                        <div>
                          <p
                            className={
                              isCompleted
                                ? "text-gray-500 line-through"
                                : "text-gray-200"
                            }
                          >
                            {task.title}
                          </p>

                          {task.description && (
                            <p className="mt-1 text-sm text-gray-500">
                              {task.description}
                            </p>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Progress */}
              {tasks.length > 0 && (
                <div className="mt-8">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Today's Progress
                    </span>

                    <span>
                      {progress}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-800">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

            </section>

            {/* Calendar */}
            <section className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-5 md:p-6">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Calendar
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Today's roadmap day is selected automatically.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const today = new Date()
                      setSelectedDate(today)
                      setCalendarMonth(
                        new Date(today.getFullYear(), today.getMonth(), 1)
                      )
                    }}
                    className="rounded-lg border border-gray-700 px-3 py-2 text-sm transition hover:bg-gray-800"
                  >
                    Today
                  </button>
                  <button
                    onClick={previousMonth}
                    className="rounded-lg border border-gray-700 px-3 py-2 transition hover:bg-gray-800"
                  >
                    ←
                  </button>

                  <button
                    onClick={nextMonth}
                    className="rounded-lg border border-gray-700 px-3 py-2 transition hover:bg-gray-800"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="mb-5 text-center text-xl font-semibold">
                {calendarMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <div className="grid grid-cols-7 gap-2">

                {[
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                ].map((day) => (
                  <div
                    key={day}
                    className="p-2 text-center text-xs font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}

                {calendarDays.map((date, index) => {
                  if (!date) {
                    return (
                      <div
                        key={`empty-${index}`}
                        className="min-h-16"
                      />
                    )
                  }

                  const number = getDayNumber(date)
                  const valid = isValidRoadmapDay(date)
                  const selected = isSameDate(date, selectedDate)

                  return (
                    <button
                      key={date.toISOString()}
                      disabled={!valid}
                      onClick={() => setSelectedDate(date)}
                      className={`min-h-16 rounded-lg border p-2 text-left transition ${
                        !valid
                          ? "cursor-not-allowed border-gray-900 bg-gray-950 text-gray-700"
                          : selected
                          ? "border-white bg-white text-black"
                          : "border-gray-800 bg-gray-950 text-gray-200 hover:border-gray-600 hover:bg-gray-800"
                      }`}
                    >
                      <div className="text-sm font-semibold">
                        {date.getDate()}
                      </div>

                      {valid && (
                        <div
                          className={`mt-2 text-[10px] ${
                            selected
                              ? "text-gray-700"
                              : "text-gray-500"
                          }`}
                        >
                          Day {number}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </section>



          </div>
        </main>
      </div>
    </div>
  )
}

export default App
