export type RoadmapTask = {
  id: string
  title: string
  description?: string
  completed: boolean
}

export type RoadmapDay = {
  day: number
  phase: string
  tasks: RoadmapTask[]
}

const makeDay = (
  day: number,
  phase: string,
  tasks: [string, string][]
): RoadmapDay => ({
  day,
  phase,
  tasks: tasks.map(([title, description], i) => ({
    id: `d${day}-t${i + 1}`,
    title,
    description,
    completed: false,
  })),
})

export const roadmap: RoadmapDay[] = [

  /* =========================
     PHASE 1 — REVISION
     DAYS 1–7
  ========================== */

  makeDay(1, "Revision", [
    ["Python Fundamentals Reset", "Syntax, indentation, comments, variables, naming conventions, int/float/complex/bool/str/None, type conversion, input/output, arithmetic/comparison/assignment/logical/bitwise/membership/identity operators, precedence, if/elif/else, truthy/falsy values, syntax/runtime/logical errors and debugging."],
    ["Practice", "Odd/even, positive/negative/zero, largest number, leap year, grade calculator, calculator, temperature converter, age calculator, simple interest, compound interest and reverse number. Complete 10 programs, 5 without notes and rebuild 3 old programs from memory."],
    ["Deliverable", "Create python_revision/day01_basics.py."]
  ]),

  makeDay(2, "Revision", [
    ["Loops, Strings & Logic", "for, while, range, nested loops, break, continue, pass, loop else, counters, accumulators, sentinel loops, string indexing, negative indexing, slicing, immutability, lower, upper, strip, split, join, replace, find, count, startswith, endswith, f-strings, formatting and ASCII/Unicode basics."],
    ["Practice", "Multiplication table, factorial, prime checking, Fibonacci, palindrome, reverse string, vowel/consonant counter, character frequency, word frequency and pattern printing."],
    ["Mini-project", "Clean an unstructured string by normalizing whitespace and case, counting words/characters, finding repeated terms and producing a summary. Complete 10 loop and 5 string problems."]
  ]),

  makeDay(3, "Revision", [
    ["Data Structures & Functions", "Lists, tuples, sets, dictionaries, mutability, nested structures, CRUD, union/intersection/difference/symmetric difference, list/set/dictionary comprehensions, function parameters/returns/scope, *args, **kwargs, lambda, map, filter, zip, enumerate, recursion basics and docstrings."],
    ["Practice", "Remove duplicates, second largest, dictionary merge, frequency counting, dictionary inversion, sort by value, matrix operations and nested-data traversal."],
    ["Mini-project", "Build a Student Management System or Inventory Tracker with add, update, delete, search, display and statistics."]
  ]),

  makeDay(4, "Revision", [
    ["Files, Exceptions & Modules", "pathlib, os, absolute/relative paths, open/read/write/append, context managers, TXT/CSV/JSON, serialization/deserialization, try/except/else/finally/raise, custom exceptions, exception hierarchy, defensive programming, modules, packages, imports and __name__."],
    ["Practice", "Read/write TXT, CSV and JSON. Build CSV → validation → cleaning → output processing with missing/invalid detection, exceptions and logging."],
    ["Deliverable", "Create a reusable file-processing module."]
  ]),

  makeDay(5, "Revision", [
    ["NumPy", "Arrays, dimensions, shape, axis, dtype, reshaping, indexing, slicing, boolean masks, vectorization, broadcasting, aggregation, random numbers, dot product, matrix multiplication and transpose."],
    ["Pandas", "Series, DataFrame, index, read_csv, read_excel, read_json, head, tail, sample, info, describe, loc, iloc, filtering, sorting, adding/removing/renaming columns, type conversion, missing values, duplicates, string operations, datetime and categorical basics."],
    ["Practice & Deliverable", "Clean a messy CSV: detect/fix types, missing values, duplicates, text normalization and derived columns. Export the cleaned data and create data_cleaning_pandas.py."]
  ]),

  makeDay(6, "Revision", [
    ["Aggregation & EDA", "groupby, agg, transform, pivot_table, merge, join, concat, sorting, ranking, crosstabs, univariate analysis, bivariate analysis and multivariate analysis."],
    ["Visualization", "Bar, line, histogram, box, scatter, heatmap, pie-chart limitations and time-series plots. Answer 5 business questions with visualizations."],
    ["Deliverable", "Create an EDA notebook with 5 business questions, visualizations, findings and recommendations."]
  ]),

  makeDay(7, "Revision", [
    ["End-to-End Revision Test", "RAW DATA → Python → Pandas/NumPy → cleaning → database → SQL → visualization → findings. Demonstrate Python, NumPy, Pandas, files, exceptions, SQL, database basics, ETL, visualization and EDA."],
    ["Mastery Gate", "Explain Python, NumPy, Pandas, SQL, ETL, databases, data cleaning and EDA without notes. Do not advance until the full pipeline can be executed and explained independently."]
  ]),

  /* =========================
     PHASE 2 — DATA ENGINEERING
     DAYS 8–24
  ========================== */

  makeDay(8, "Data Engineering", [
    ["ETL Architecture & Foundations", "Data Engineering role; Data Analyst vs Data Engineer vs Data Scientist vs ML Engineer; ETL vs ELT; batch, streaming and micro-batching; pipeline stages; raw layer; validation; transformation; loading; warehouse; data lake/lakehouse concepts; schema-on-read vs schema-on-write; idempotency; reproducibility; separation of concerns; configuration-driven pipelines."],
    ["Refactor Existing ETL", "Implement SOURCE → EXTRACT → RAW → VALIDATE → TRANSFORM → LOAD → WAREHOUSE. Split code into extract.py, transform.py, validate.py, load.py, main.py, config.py and utils.py."]
  ]),

  makeDay(9, "Data Engineering", [
    ["Data Quality & Validation", "Completeness, accuracy, consistency, validity, uniqueness, integrity and timeliness. Check nulls, duplicates, types, ranges, impossible values, dates, categories, referential integrity, schema rules, business rules and primary-key uniqueness."],
    ["Deliverable", "Create data_validator.py and produce a validation report with passed/failed checks, affected rows, severity and recommended actions."]
  ]),

  makeDay(10, "Data Engineering", [
    ["Logging, Errors & Reliability", "DEBUG, INFO, WARNING, ERROR, CRITICAL, timestamps, file/console logging, structured logging concept, exception hierarchy, graceful failure, retry limits, exponential backoff, timeouts, failure isolation, quarantine/dead-letter concept, idempotent reruns and run/correlation IDs."],
    ["Fault Injection", "Intentionally break an invalid URL, timeout, malformed JSON, DB connection, bad file and invalid record. Test logs, exceptions, retries and recovery behavior."]
  ]),

  makeDay(11, "Data Engineering", [
    ["APIs & HTTP", "Request/response model, status codes, GET, POST, PUT, PATCH, DELETE, headers, query parameters, authentication concepts, API keys/tokens, pagination, rate limits, timeouts and retries."],
    ["JSON & Ingestion", "Nested objects, lists, flattening and normalization. Ingest two public APIs into raw JSON, DataFrames and CSV/database. Create api_extractor.py."]
  ]),

  makeDay(12, "Data Engineering", [
    ["Data Formats", "CSV, JSON, Parquet and Avro concept; row-oriented vs column-oriented formats, schema, compression, serialization and deserialization."],
    ["Performance Experiment", "Generate 1M+ rows and compare file size, write time, read time, memory usage, column-selection performance and compression. Produce a performance notebook/script."]
  ]),

  makeDay(13, "Data Engineering", [
    ["PostgreSQL Fundamentals", "DBMS/RDBMS, database/schema/table/row/column/data types; PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT; DDL, DML, DQL, DCL and TCL concepts; 1:1, 1:M and M:M relationships."],
    ["Database Theory", "Normalization 1NF, 2NF, 3NF and BCNF concept; denormalization; transactions; ACID; BEGIN, COMMIT, ROLLBACK; isolation and concurrency concepts. Build 3–4 related tables and connect Python to PostgreSQL."]
  ]),

  makeDay(14, "Data Engineering", [
    ["Full Python → PostgreSQL ETL", "API → requests → JSON → Pandas → validation → transformation → PostgreSQL with schema enforcement, type validation, duplicate handling, constraints, transactions, logging, exceptions and clean inserts."],
    ["Verification", "Test repeated runs and verify row counts, nulls, duplicates, invalid rows, inserts, updates, failures and idempotency."]
  ]),

  makeDay(15, "Data Engineering", [
    ["Advanced SQL", "Complex joins, self joins, subqueries, correlated subqueries, CTEs, recursive CTE concept, window functions, ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, running totals, moving averages, percent-of-total, CASE, NULL handling, date functions, string functions, UNION, UNION ALL, INTERSECT, EXCEPT, ROLLUP and CUBE."],
    ["Practice", "Solve at least 20 complex analytical SQL questions."]
  ]),

  makeDay(16, "Data Engineering", [
    ["Data Modeling & Warehousing", "OLTP, OLAP, operational databases, analytical databases, data warehouses, data marts, fact tables, dimensions, grain, measures, surrogate keys, natural keys, star schema, snowflake schema, normalized vs dimensional modeling and SCD Type 0/1/2 concepts."],
    ["Deliverable", "Build a retail or education warehouse with 1 fact and 3–4 dimensions in PostgreSQL. Create schema_design.sql and a schema/ER diagram."]
  ]),

  makeDay(17, "Data Engineering", [
    ["Incremental Loading & CDC", "Full vs incremental loading, watermark, updated_at, high-water mark, change data capture concept, insert/update detection, upsert/merge, deduplication and audit columns."],
    ["Practice", "Run an initial load, add 5 rows, modify 2 rows, rerun the pipeline and verify only required changes are applied. Create incremental_etl.py."]
  ]),

  makeDay(18, "Data Engineering", [
    ["Query Optimization & Indexing", "Execution plans, EXPLAIN, EXPLAIN ANALYZE, sequential/index/bitmap scans, B-tree indexes, composite indexes, covering/index-only concepts, selectivity, cardinality, index trade-offs and join/filter optimization."],
    ["Benchmark", "Use 500k+ rows and record before/after index and query-optimization timings in a performance report."]
  ]),

  makeDay(19, "Data Engineering", [
    ["Automation & Workflow Orchestration", "Cron, scheduled jobs, dependencies, DAGs, task states, retries, backfills, monitoring, alerts and failure recovery."],
    ["Airflow Concepts & Practice", "Understand Airflow DAGs, tasks, operators, dependencies, scheduling, XCom concept and backfills. Create a small extract → validate → transform → load workflow."]
  ]),

  makeDay(20, "Data Engineering", [
    ["Linux for Data Engineering", "pwd, ls, cd, find, grep, awk, sed, cat, head, tail, sort, uniq, cut, wc, xargs, pipes and redirection; filesystem, permissions, users/groups, processes, signals, environment variables, PATH, exit codes, background jobs, cron and shell scripting."],
    ["Deliverable", "Create run_pipeline.sh that reads configuration, runs ETL, captures logs, checks exit codes and archives output."]
  ]),

  makeDay(21, "Data Engineering", [
    ["Docker", "Containers, images, layers, Dockerfile, build/run, volumes, networks, environment variables, .dockerignore and Docker Compose. Build PostgreSQL and ETL containers with persistence."],
    ["Cloud Fundamentals", "Understand IaaS, PaaS, SaaS, compute, object storage, managed databases, containers, networking basics, IAM concept, secrets management, regions/zones, cost awareness and cloud data warehouses."]
  ]),

  makeDay(22, "Data Engineering", [
    ["Git & GitHub", "git init, clone, status, add, commit, log, diff, branch, switch/checkout, merge, pull, push, stash, reset concept, revert, tags, releases and .gitignore. Understand working tree, staging area, history and merge conflicts."],
    ["Deliverable", "Publish a clean ETL repository with README, architecture diagram, installation instructions, execution instructions and meaningful repository hygiene."]
  ]),

  makeDay(23, "Data Engineering", [
    ["Big Data Fundamentals", "Why single-machine processing fails; volume, velocity, variety; distributed systems; horizontal vs vertical scaling; distributed storage/compute; fault tolerance; replication; partitioning; shuffling; Hadoop; HDFS; YARN; MapReduce; Spark; PySpark."],
    ["Spark Basics", "Create SparkSession, read CSV, define schemas, count, select, filter and basic transformations. Create spark_basics.py."]
  ]),

  makeDay(24, "Data Engineering", [
    ["Spark/PySpark Engineering", "Lazy evaluation, transformations, actions, DAGs, jobs, stages, tasks, partitions, partitioning, shuffle, caching, persistence, broadcast variables, repartition, coalesce, Parquet, predicate pushdown and partition pruning."],
    ["Deliverable", "Build CSV → PySpark → clean → transform → aggregate → Parquet. Use repartition/coalesce/cache/partitioned writes and measure performance."]
  ]),

  /* =========================
     PHASE 3 — NEPAL DATA PROJECT
     DAYS 25–34
  ========================== */

  makeDay(25, "Nepal Data Project", [
    ["Project Definition", "Choose population, education, weather, development, economy, tourism, transportation or student-performance data. Define the problem, users, business/research questions, hypotheses, dataset, source, reliability, license, success criteria, outputs and architecture."],
    ["Deliverables", "Create GitHub repository, README, project specification and architecture diagram."]
  ]),

  makeDay(26, "Nepal Data Project", [
    ["Data Acquisition", "CSV, APIs, open data, government datasets and web-data acquisition/scraping concepts. Understand robots/licensing/ethical collection, raw vs clean data, source metadata, acquisition timestamp and versioning."],
    ["Deliverable", "Acquire and document the raw dataset, source, format, license and acquisition date."]
  ]),

  makeDay(27, "Nepal Data Project", [
    ["Data Profiling", "Row/column counts, data types, missingness, duplicates, unique values, cardinality, summary statistics, outliers, date ranges and inconsistencies."],
    ["Deliverable", "Create a complete profiling report."]
  ]),

  makeDay(28, "Nepal Data Project", [
    ["Data Cleaning", "Missing values, incorrect types, duplicates, text normalization, inconsistent categories, invalid dates, outliers, impossible values and validation rules."],
    ["Deliverable", "Create clean_data.py and produce the cleaned dataset."]
  ]),

  makeDay(29, "Nepal Data Project", [
    ["Transformation & Feature Preparation", "Derived columns, normalized values, date features, categorical features, business metrics, aggregations and analysis-ready tables using Python, Pandas and SQL."],
    ["Deliverable", "Produce analysis-ready tables/datasets."]
  ]),

  makeDay(30, "Nepal Data Project", [
    ["Database Loading", "Design tables, data types, primary/foreign keys, constraints, indexes and fact/dimension relationships where appropriate."],
    ["Deliverable", "Load clean data into PostgreSQL using a repeatable script."]
  ]),

  makeDay(31, "Nepal Data Project", [
    ["Automated Nepal ETL", "Build RAW → VALIDATION → CLEANING → TRANSFORMATION → POSTGRESQL with logging, validation, errors, retries, timestamps, configuration and idempotent reruns."],
    ["Deliverable", "Create run_nepal_pipeline.py."]
  ]),

  makeDay(32, "Nepal Data Project", [
    ["Analytical SQL", "Answer at least 20 real project questions with joins, aggregations, CTEs, subqueries, window functions, ranking, date analysis, comparative analysis and trend analysis."],
    ["Deliverable", "Publish analytical SQL and interpretations."]
  ]),

  makeDay(33, "Nepal Data Project", [
    ["Power BI & Visualization", "Build KPIs, trends, category analysis, regional analysis, filters, slicers and drill-down. Every visual must answer a real question."],
    ["Deliverable", "Complete an interactive dashboard."]
  ]),

  makeDay(34, "Nepal Data Project", [
    ["Presentation & Documentation", "Executive summary, problem, sources, data quality, architecture, methodology, findings, recommendations, limitations and future work."],
    ["Deliverable", "Publish GitHub README, screenshots, dashboard, architecture and code."]
  ]),

  /* =========================
     PHASE 4 — DATA SCIENCE
     DAYS 35–44
  ========================== */

  makeDay(35, "Data Science Foundations", [
    ["Data Science Mindset", "Data Science vs Data Engineering vs ML; lifecycle; problem definition; business questions; hypotheses; variables; population vs sample; bias; sampling; data leakage; correlation vs causation; experimental vs observational data; success metrics."],
    ["Deliverable", "Create a hypothesis and project-framing document."]
  ]),

  makeDay(36, "Data Science Foundations", [
    ["Descriptive Statistics & Sampling", "Mean, median, mode, range, variance, standard deviation, percentiles, quartiles, IQR, MAD concept, weighted mean, z-score, population vs sample statistics, sampling methods, sampling distributions, standard error and Central Limit Theorem."],
    ["Practice", "Implement core statistics manually and with NumPy/Pandas."]
  ]),

  makeDay(37, "Data Science Foundations", [
    ["Probability & Distributions", "Probability rules, conditional probability, independence, Bayes theorem, random variables, expected value, variance, normal, uniform, binomial, Poisson and exponential distributions, skewness, kurtosis and empirical rule."],
    ["Practice", "Plot distributions and assess/interpret normality."]
  ]),

  makeDay(38, "Data Science Foundations", [
    ["Hypothesis Testing & Statistical Inference", "Null/alternative hypotheses, alpha, p-value, Type I/II errors, statistical power, one-tailed/two-tailed tests, confidence intervals, one-sample/two-sample/paired t-tests, chi-square, ANOVA concept, effect size, practical vs statistical significance and multiple-testing concept."],
    ["Practice", "Run at least 2 tests and explain the result in business language."]
  ]),

  makeDay(39, "Data Science Foundations", [
    ["Exploratory Data Analysis", "Univariate, bivariate and multivariate analysis, distributions, outliers, correlation/covariance, Pearson/Spearman, correlation matrices, pair plots, group comparisons and segmentation."],
    ["Deliverable", "Find at least 10 actionable insights in an unfamiliar dataset."]
  ]),

  makeDay(40, "Data Science Foundations", [
    ["Statistical Data Cleaning", "MCAR, MAR, MNAR, mean/median/mode imputation, forward/backward fill, group-based imputation, KNN imputation concept, IQR/Z-score outliers, winsorization and robust statistics."],
    ["Experiment", "Compare at least 3 imputation strategies."]
  ]),

  makeDay(41, "Data Science Foundations", [
    ["Feature Engineering & Preprocessing", "One-hot, ordinal, label, target and frequency encoding; StandardScaler, MinMaxScaler, RobustScaler; log/power transforms, interactions, polynomial features, binning, date/time features, basic text features and leakage prevention."],
    ["Experiment", "Compare model performance before and after feature engineering."]
  ]),

  makeDay(42, "Data Science Foundations", [
    ["PCA & Dimensionality Reduction", "Curse of dimensionality, feature space, covariance matrix, eigenvector/eigenvalue intuition, principal components, explained variance, standardization, reconstruction and PCA limitations."],
    ["Additional Concepts", "Understand t-SNE and UMAP concepts. Reduce 20+ features and visualize them in 2D."]
  ]),

  makeDay(43, "Data Science Foundations", [
    ["Statistical Regression Foundations", "Pearson/Spearman, simple and multiple linear regression, OLS intuition, coefficients, intercepts, R², adjusted R², residuals, coefficient confidence intervals, coefficient p-values, multicollinearity, VIF, regression assumptions and causal limitations."],
    ["Deliverable", "Compare feature subsets and interpret model statistics."]
  ]),

  makeDay(44, "Data Science Foundations", [
    ["Data Storytelling & Reporting", "Stakeholder analysis, executive summaries, problem → evidence → insight → recommendation, chart selection, misleading visualizations, uncertainty communication, limitations and actionability."],
    ["Deliverable", "Create a 5-page PDF or slide deck."]
  ]),

  /* =========================
     PHASE 5 — ML/DL/MLOPS
     DAYS 45–108
  ========================== */

  makeDay(45, "Machine Learning, Deep Learning & MLOps", [
    ["Machine Learning Foundations", "AI vs ML vs DL; supervised, unsupervised and semi-supervised concepts; regression, classification, clustering, dimensionality reduction, anomaly detection and reinforcement learning concept."],
    ["Practice", "Categorize 20 real-world problems by ML approach."]
  ]),

  makeDay(46, "Machine Learning, Deep Learning & MLOps", [
    ["End-to-End Data Science Workflow", "RAW → EDA → hypothesis → cleaning → feature engineering → training → evaluation → reporting. Define target, baseline, feature/target separation, validation, evaluation and interpretation."],
    ["Deliverable", "Create a reproducible notebook and publish it to GitHub."]
  ]),

  makeDay(47, "Machine Learning, Deep Learning & MLOps", [
    ["Scikit-Learn Architecture", "Estimators, transformers, fit, transform, fit_transform, predict, predict_proba, Pipeline, ColumnTransformer, custom transformers and serialization concepts."],
    ["Deliverable", "Build a clean reusable sklearn pipeline."]
  ]),

  makeDay(48, "Machine Learning, Deep Learning & MLOps", [
    ["Train/Validation/Test & Cross-Validation", "Train/validation/test sets, random_state, stratification, leakage, K-Fold, Stratified K-Fold, Group K-Fold, repeated CV, cross_val_score and nested CV concept."],
    ["Practice", "Compare manual K-Fold with sklearn cross-validation."]
  ]),

  makeDay(49, "Machine Learning, Deep Learning & MLOps", [
    ["Simple Linear Regression", "Equation y=mx+c, parameters, objective, MSE, loss, ordinary least-squares intuition and connection to gradient descent."],
    ["Practice", "Implement Linear Regression with NumPy from scratch and with scikit-learn."]
  ]),

  makeDay(50, "Machine Learning, Deep Learning & MLOps", [
    ["Multiple Linear Regression", "Matrix representation, normal equation, coefficient interpretation, collinearity, VIF and regularization motivation."],
    ["Practice", "Use an economic/house dataset and calculate VIF."]
  ]),

  makeDay(51, "Machine Learning, Deep Learning & MLOps", [
    ["Gradient Descent", "Derivatives, gradients, learning rate, batch/stochastic/mini-batch gradient descent, convergence, local-minima concept, feature scaling and learning curves."],
    ["Practice", "Visualize optimization in 2D/3D."]
  ]),

  makeDay(52, "Machine Learning, Deep Learning & MLOps", [
    ["Regression Metrics", "MAE, MSE, RMSE, R², adjusted R², MAPE limitations, median absolute error and metric selection."],
    ["Practice", "Calculate metrics manually and with sklearn and interpret them in business terms."]
  ]),

  makeDay(53, "Machine Learning, Deep Learning & MLOps", [
    ["Residual Analysis", "Residual plots, mean-zero intuition, homoscedasticity, heteroscedasticity, normality, QQ plots, influential points, leverage and model misspecification."],
    ["Practice", "Diagnose regression assumptions and failure modes."]
  ]),

  makeDay(54, "Machine Learning, Deep Learning & MLOps", [
    ["Polynomial Regression", "Nonlinear relationships, polynomial features, degree 2/3+, bias/variance trade-off and overfitting."],
    ["Practice", "Compare several polynomial degrees with a linear model."]
  ]),

  makeDay(55, "Machine Learning, Deep Learning & MLOps", [
    ["Regularization", "Overfitting motivation, Ridge, Lasso, Elastic Net concept, L1, L2, coefficient shrinkage, feature selection and regularization strength."],
    ["Practice", "Compare regularized and unregularized models."]
  ]),

  makeDay(56, "Machine Learning, Deep Learning & MLOps", [
    ["Logistic Regression", "Binary classification, sigmoid, odds, log-odds, decision boundaries, log loss, maximum-likelihood intuition and regularization."],
    ["Practice", "Build a classifier and decision-boundary visualization."]
  ]),

  makeDay(57, "Machine Learning, Deep Learning & MLOps", [
    ["Classification Metrics", "Confusion matrix, TP, TN, FP, FN, accuracy, precision, recall, specificity, F1, macro, micro and weighted averages."],
    ["Practice", "Calculate metrics manually and with sklearn."]
  ]),

  makeDay(58, "Machine Learning, Deep Learning & MLOps", [
    ["ROC/AUC + Precision-Recall", "TPR, FPR, ROC, AUC, precision-recall curve, average precision, threshold selection, threshold optimization, cost-sensitive decisions, class imbalance and calibration concepts."],
    ["Practice", "Compare thresholds and choose an operating point for a business objective."]
  ]),

  makeDay(59, "Machine Learning, Deep Learning & MLOps", [
    ["Multiclass Classification", "Binary vs multiclass vs multilabel concepts, One-vs-Rest, One-vs-One, softmax, class probabilities and per-class metrics."],
    ["Practice", "Use Iris or Wine and report per-class precision and recall."]
  ]),

  makeDay(60, "Machine Learning, Deep Learning & MLOps", [
    ["Decision Trees", "Nodes, leaves, splits, entropy, information gain, Gini impurity, regression trees, pruning, max depth and minimum samples."],
    ["Practice", "Visualize trees and compare model depths."]
  ]),

  makeDay(61, "Machine Learning, Deep Learning & MLOps", [
    ["Random Forest", "Bagging, bootstrap sampling, random feature selection, ensemble learning, classification, regression and out-of-bag concept."],
    ["Practice", "Compare a single decision tree with Random Forest."]
  ]),

  makeDay(62, "Machine Learning, Deep Learning & MLOps", [
    ["Feature Importance", "Mean decrease impurity, permutation importance, partial dependence concept, SHAP intuition and correlated-feature limitations."],
    ["Practice", "Plot and interpret multiple feature-importance methods."]
  ]),

  makeDay(63, "Machine Learning, Deep Learning & MLOps", [
    ["K-Nearest Neighbors", "Euclidean, Manhattan and Minkowski distance, choosing K, voting, distance weighting, feature scaling and curse of dimensionality."],
    ["Practice", "Implement KNN from scratch and with sklearn."]
  ]),

  makeDay(64, "Machine Learning, Deep Learning & MLOps", [
    ["Naive Bayes", "Bayes theorem, prior, likelihood, posterior, conditional independence, Gaussian, Multinomial and Bernoulli Naive Bayes."],
    ["Practice", "Build a spam/text classifier."]
  ]),

  makeDay(65, "Machine Learning, Deep Learning & MLOps", [
    ["Support Vector Machines", "Hyperplanes, margins, maximum-margin classifier, support vectors, hard/soft margin, C, kernel trick, linear/polynomial/RBF kernels and gamma."],
    ["Practice", "Compare linear and RBF SVMs."]
  ]),

  makeDay(66, "Machine Learning, Deep Learning & MLOps", [
    ["Hyperparameter Tuning", "Parameters vs hyperparameters, GridSearchCV, RandomizedSearchCV, successive-halving concept, search spaces, validation and computational cost."],
    ["Practice", "Tune a Random Forest without leaking test data."]
  ]),

  makeDay(67, "Machine Learning, Deep Learning & MLOps", [
    ["Bias, Variance & Learning Curves", "Underfitting, overfitting, bias, variance, model complexity, generalization, training/validation error, learning curves and validation curves."],
    ["Practice", "Diagnose underfitting and overfitting."]
  ]),

  makeDay(68, "Machine Learning, Deep Learning & MLOps", [
    ["Advanced Preprocessing Pipelines", "Pipeline, ColumnTransformer, FeatureUnion, missing-value transformers, scaling, encoding, custom transformers, reproducibility and preprocessing-leakage prevention."],
    ["Practice", "Build a complete mixed-type preprocessing pipeline."]
  ]),

  makeDay(69, "Machine Learning, Deep Learning & MLOps", [
    ["Imbalanced Classification", "Class imbalance, accuracy paradox, oversampling, undersampling, class weights, threshold adjustment and SMOTE concept."],
    ["Practice", "Compare balancing strategies using appropriate metrics."]
  ]),

  makeDay(70, "Machine Learning, Deep Learning & MLOps", [
    ["Feature Selection", "Filter methods, wrapper methods, embedded methods, correlation filtering, mutual information concept, RFE, L1 and model-based importance."],
    ["Practice", "Compare reduced and full feature sets."]
  ]),

  makeDay(71, "Machine Learning, Deep Learning & MLOps", [
    ["K-Means Clustering", "Centroids, initialization, assignment/update steps, WCSS, elbow method, silhouette score, K selection and scaling."],
    ["Practice", "Implement K-Means from scratch and with sklearn."]
  ]),

  makeDay(72, "Machine Learning, Deep Learning & MLOps", [
    ["Customer Segmentation", "RFM: recency, frequency and monetary value; scaling, segmentation, cluster interpretation and business action."],
    ["Deliverable", "Build an RFM clustering notebook with business recommendations."]
  ]),

  makeDay(73, "Machine Learning, Deep Learning & MLOps", [
    ["Hierarchical Clustering", "Agglomerative clustering, divisive concept, dendrograms, single/complete/average/Ward linkage and distance metrics."],
    ["Practice", "Build a dendrogram and choose a cluster count."]
  ]),

  makeDay(74, "Machine Learning, Deep Learning & MLOps", [
    ["Clustering Evaluation", "Silhouette, Davies-Bouldin, Calinski-Harabasz, inertia/WCSS, stability and interpretability."],
    ["Practice", "Compare K values and linkage methods."]
  ]),

  makeDay(75, "Machine Learning, Deep Learning & MLOps", [
    ["DBSCAN", "Epsilon, minimum samples, core points, border points, noise, density, non-spherical clusters and limitations."],
    ["Practice", "Compare K-Means and DBSCAN on non-spherical data."]
  ]),

  makeDay(76, "Machine Learning, Deep Learning & MLOps", [
    ["Anomaly Detection", "Point, contextual and collective anomalies; statistical outliers; Isolation Forest; One-Class SVM and thresholds."],
    ["Practice", "Detect fraud- or sensor-style anomalies."]
  ]),

  makeDay(77, "Machine Learning, Deep Learning & MLOps", [
    ["Time-Series Foundations", "Time index, trend, seasonality, cycles, noise, stationarity, autocorrelation, partial autocorrelation, ACF, PACF, rolling statistics, differencing and decomposition."],
    ["Practice", "Analyze and decompose a real time series."]
  ]),

  makeDay(78, "Machine Learning, Deep Learning & MLOps", [
    ["ARIMA/SARIMA", "AR, MA, I terms; p, d, q; seasonal P, D, Q, S; stationarity, differencing and residual analysis."],
    ["Practice", "Build a historical forecast and diagnose residuals."]
  ]),

  makeDay(79, "Machine Learning, Deep Learning & MLOps", [
    ["Prophet & Modern Forecasting", "Trend, seasonality, holidays, change points, uncertainty intervals, forecast horizon and external-regressor concept."],
    ["Practice", "Build a multi-month forecast."]
  ]),

  makeDay(80, "Machine Learning, Deep Learning & MLOps", [
    ["Time-Series Validation", "Why ordinary K-Fold can leak future information; TimeSeriesSplit, rolling windows, expanding windows, walk-forward validation, forecast horizon and backtesting."],
    ["Practice", "Backtest a forecasting model using time-aware validation."]
  ]),

  makeDay(81, "Machine Learning, Deep Learning & MLOps", [
    ["SMOTE & Resampling", "Oversampling, undersampling, SMOTE, synthetic samples, class weights and the rule that resampling belongs only on training data."],
    ["Practice", "Compare original data, class weights and resampled training."]
  ]),

  makeDay(82, "Machine Learning, Deep Learning & MLOps", [
    ["Ensemble Methods", "Ensemble principle, voting, hard/soft voting, bagging, boosting, stacking and blending concept."],
    ["Practice", "Compare individual models against an ensemble."]
  ]),

  makeDay(83, "Machine Learning, Deep Learning & MLOps", [
    ["AdaBoost", "Weak learners, decision stumps, sample weights, sequential boosting, error-driven weight updates and learning rate."],
    ["Practice", "Build an AdaBoost classifier."]
  ]),

  makeDay(84, "Machine Learning, Deep Learning & MLOps", [
    ["Gradient Boosting", "Residual fitting, weak learners, sequential learning, shrinkage, learning rate and estimator count."],
    ["Practice", "Build a gradient-boosting regressor/classifier."]
  ]),

  makeDay(85, "Machine Learning, Deep Learning & MLOps", [
    ["XGBoost", "Gradient boosting, first/second-order information, regularization, tree pruning, max_depth, learning_rate, n_estimators, early stopping and missing values."],
    ["Practice", "Train and tune an XGBoost classifier."]
  ]),

  makeDay(86, "Machine Learning, Deep Learning & MLOps", [
    ["LightGBM", "Leaf-wise growth, histogram-based learning, GOSS/EFB concepts, categorical handling and speed/memory trade-offs."],
    ["Practice", "Compare LightGBM and XGBoost on a larger dataset."]
  ]),

  makeDay(87, "Machine Learning, Deep Learning & MLOps", [
    ["CatBoost", "Categorical features, ordered boosting, symmetric trees and overfitting controls."],
    ["Practice", "Train CatBoost without manual one-hot encoding."]
  ]),

  makeDay(88, "Machine Learning, Deep Learning & MLOps", [
    ["Boosting Comparison", "Compare XGBoost, LightGBM, CatBoost and Gradient Boosting using accuracy/F1 or RMSE, ROC-AUC when applicable, training time, inference time, memory, complexity and interpretability."],
    ["Deliverable", "Write an engineering recommendation explaining the final model choice."]
  ]),

  makeDay(89, "Machine Learning, Deep Learning & MLOps", [
    ["Content-Based Recommendation", "Item representation, TF-IDF, vocabulary, term frequency, inverse document frequency, cosine similarity, user profiles and ranking."],
    ["Practice", "Build a movie or book recommender."]
  ]),

  makeDay(90, "Machine Learning, Deep Learning & MLOps", [
    ["Collaborative Filtering", "User-based and item-based collaborative filtering, user-item matrix, sparsity, matrix factorization, SVD concept, latent factors, cold-start problem and implicit vs explicit feedback."],
    ["Practice", "Implement a library-based recommender plus a basic manual version."]
  ]),

  makeDay(91, "Machine Learning, Deep Learning & MLOps", [
    ["Explainable AI", "Interpretability, global vs local explanations, feature attribution, Shapley-value intuition, SHAP summary/dependence/waterfall plots, LIME concept and explanation limitations."],
    ["Practice", "Explain an XGBoost model with SHAP."]
  ]),

  makeDay(92, "Machine Learning, Deep Learning & MLOps", [
    ["Model Persistence & Versioning", "Pickle, Joblib, ONNX concept, model/preprocessing artifacts, versioning, reproducibility, dependency versions, random seeds and serialization/security risks."],
    ["Practice", "Save a model and preprocessing pipeline and reload both from a clean script."]
  ]),

  makeDay(93, "Machine Learning, Deep Learning & MLOps", [
    ["FastAPI ML Deployment", "REST APIs, HTTP request/response, JSON, Pydantic, dependency-injection concept, error handling, model loading, prediction endpoint, probability endpoint, latency and health checks."],
    ["Deliverable", "Create app.py and requirements.txt for a prediction API."]
  ]),

  makeDay(94, "Machine Learning, Deep Learning & MLOps", [
    ["Neural Network Foundations", "Neuron, perceptron, weights, bias, linear combination, sigmoid, tanh, ReLU, Leaky ReLU concept, forward propagation and decision boundaries."],
    ["Practice", "Implement a NumPy forward pass."]
  ]),

  makeDay(95, "Machine Learning, Deep Learning & MLOps", [
    ["Loss Functions & Optimization Mathematics", "MSE, MAE, binary cross-entropy, categorical cross-entropy, hinge loss, log loss, gradients, partial derivatives and loss surfaces."],
    ["Practice", "Relate loss functions to appropriate learning problems."]
  ]),

  makeDay(96, "Machine Learning, Deep Learning & MLOps", [
    ["Backpropagation & Chain Rule", "Derivatives, chain rule, computational graphs, forward/backward passes, gradient calculation, weight updates and learning rate."],
    ["Practice", "Hand-derive a two-layer network and implement backpropagation in NumPy."]
  ]),

  makeDay(97, "Machine Learning, Deep Learning & MLOps", [
    ["PyTorch/TensorFlow Foundations", "PyTorch tensors, shapes, dtypes, CPU/GPU, CUDA concept, autograd, nn.Module, Dataset, DataLoader and training loops. Understand TensorFlow/Keras architecture conceptually."],
    ["Practice", "Implement gradient calculations with PyTorch."]
  ]),

  makeDay(98, "Machine Learning, Deep Learning & MLOps", [
    ["MLP / Fully Connected Networks", "Linear layers, Sequential, forward method, activations, batches, epochs, training loop and validation loop."],
    ["Practice", "Train a 3-layer tabular neural network in PyTorch."]
  ]),

  makeDay(99, "Machine Learning, Deep Learning & MLOps", [
    ["Optimizers", "SGD, momentum, RMSprop, Adam, AdamW concept, learning-rate schedules, warmup concept and weight decay."],
    ["Practice", "Compare SGD and Adam."]
  ]),

  makeDay(100, "Machine Learning, Deep Learning & MLOps", [
    ["Batch Normalization", "Activation normalization concept, scale/shift, learnable parameters, training vs inference and nn.BatchNorm1d."],
    ["Practice", "Add BatchNorm1d and examine training behavior."]
  ]),

  makeDay(101, "Machine Learning, Deep Learning & MLOps", [
    ["CNNs", "Image tensors, kernels, convolution, stride, padding, feature maps, receptive field, max/average pooling, flattening and dense layers."],
    ["Practice", "Build an MNIST or CIFAR classifier."]
  ]),

  makeDay(102, "Machine Learning, Deep Learning & MLOps", [
    ["RNNs & LSTMs", "Sequence data, recurrence, hidden state, unrolling, vanishing/exploding gradients, forget/input/output gates, cell state, LSTM and GRU concept."],
    ["Practice", "Apply an RNN/LSTM to time-series or text data."]
  ]),

  makeDay(103, "Machine Learning, Deep Learning & MLOps", [
    ["Attention & Transformers", "Sequence-to-sequence motivation, queries/keys/values, scaled dot-product attention, softmax attention, multi-head attention, self-attention, cross-attention, positional encoding/embeddings, tokenization, embeddings, encoder, decoder, masking, causal attention, transformer blocks, residual connections, layer normalization and feed-forward networks."],
    ["Practice", "Implement scaled dot-product attention in PyTorch."]
  ]),

  makeDay(104, "Machine Learning, Deep Learning & MLOps", [
    ["Deep Learning Regularization", "Dropout, L1, L2, weight decay, early stopping, data augmentation concept, batch normalization, overfitting and underfitting."],
    ["Practice", "Compare regularization methods using training/validation curves."]
  ]),

  makeDay(105, "Machine Learning, Deep Learning & MLOps", [
    ["Transfer Learning", "Pretrained models, feature extraction, freezing layers, fine-tuning, learning-rate selection, domain shift, ResNet, MobileNet and Hugging Face transformer concepts."],
    ["Practice", "Fine-tune a pretrained model on a vision or text dataset."]
  ]),

  makeDay(106, "Machine Learning, Deep Learning & MLOps", [
    ["MLOps & Experiment Tracking", "ML lifecycle, reproducibility, experiments, parameters, metrics, artifacts, model registry, model versions and MLflow."],
    ["Practice", "Track at least 5 experiments and compare runs."]
  ]),

  makeDay(107, "Machine Learning, Deep Learning & MLOps", [
    ["Data/Model Drift & Monitoring", "Covariate shift, concept drift, prior probability shift, data-quality monitoring, feature drift, prediction drift, performance decay, monitoring metrics, alerts and retraining concepts."],
    ["Practice", "Simulate drift and detect it using KS/statistical tests and explore Evidently."]
  ]),

  makeDay(108, "Machine Learning, Deep Learning & MLOps", [
    ["Complete ML Audit", "Test ML terminology, math, statistics, probability, regression, classification, trees, ensembles, clustering, time series, recommendation systems, preprocessing, validation, leakage, metrics, tuning, explainability, persistence, deployment, deep learning and MLOps."],
    ["Deliverable", "Complete written, oral and coding tests. Record knowledge gaps and create a Top-10 revision list."]
  ]),

  /* =========================
     PHASE 6 — PROJECTS + INTERNSHIP
     DAYS 109–153
  ========================== */

  makeDay(109, "Projects & Internship", [
    ["Portfolio Strategy", "Define four portfolio experiences: Data Engineering, Data Science + ML, Big Data + Spark + ML and a final integrated capstone. For each define problem, dataset, scale, architecture, technologies, metrics, output and GitHub plan."],
    ["Career Positioning", "Make every project demonstrate measurable engineering, analytical or modeling evidence instead of a list of technologies."]
  ]),

  makeDay(110, "Projects & Internship", [
    ["Project 1 Planning", "Choose finance, logistics, healthcare, Nepal data or e-commerce. Define source, data volume, frequency, extraction, validation, transformation, storage, warehouse, analytics and metrics."],
    ["Deliverable", "Create the full architecture document."]
  ]),

  makeDay(111, "Projects & Internship", [
    ["Project 1 Ingestion", "Implement API/CSV ingestion, JSON normalization, schema validation, retries, timeouts, logging, raw storage and configuration."],
    ["Deliverable", "Create extract.py."]
  ]),

  makeDay(112, "Projects & Internship", [
    ["Project 1 Validation", "Implement schema, null, type, range, duplicate, business-rule and referential checks."],
    ["Deliverable", "Quarantine bad records and create validate.py."]
  ]),

  makeDay(113, "Projects & Internship", [
    ["Project 1 Transformation", "Implement standardization, deduplication, business rules, derived metrics, date dimensions, aggregations and feature creation."],
    ["Deliverable", "Create transform.py."]
  ]),

  makeDay(114, "Projects & Internship", [
    ["Project 1 Warehouse", "Dimensional modeling, grain, facts, dimensions, surrogate keys, constraints, indexes and star schema using PostgreSQL and/or DuckDB."],
    ["Deliverable", "Create warehouse_schema.sql and warehouse diagram."]
  ]),

  makeDay(115, "Projects & Internship", [
    ["Project 1 Loading", "Batch loading, incremental loading, upsert, audit columns, transactions, row-count checks and load validation."],
    ["Deliverable", "Create load.py."]
  ]),

  makeDay(116, "Projects & Internship", [
    ["Project 1 Integration", "Main orchestrator, configuration, environment variables, logging, exceptions, retries, failure notifications and run metadata."],
    ["Deliverable", "Create main.py."]
  ]),

  makeDay(117, "Projects & Internship", [
    ["Project 1 Automation & Docker", "Dockerfile, Docker Compose, environment configuration, volumes, database/ETL services and scheduled execution."],
    ["CI/CD Concepts", "Understand source triggers, build, test, package, deploy and rollback concepts."]
  ]),

  makeDay(118, "Projects & Internship", [
    ["Project 1 Analytics", "Create at least 10 business questions using joins, CTEs, window functions, aggregations, dates, ranking and query optimization."],
    ["Deliverable", "Publish analytical results and interpretations."]
  ]),

  makeDay(119, "Projects & Internship", [
    ["Project 1 Packaging", "README, architecture/data-flow diagram, installation, configuration, usage, screenshots, requirements, sample output, troubleshooting and limitations."],
    ["Deliverable", "Publish a professional GitHub repository."]
  ]),

  makeDay(120, "Projects & Internship", [
    ["Project 1 Presentation", "Create a 5-minute technical presentation/video or technical blog covering problem, architecture, data, pipeline, challenges, engineering decisions, results and future work."]
  ]),

  makeDay(121, "Projects & Internship", [
    ["Project 2 Planning", "Choose a different domain. Define problem, target, success metric, dataset, hypothesis, baseline, candidate models and deployment possibility."],
    ["Deliverable", "Create the complete ML project specification."]
  ]),

  makeDay(122, "Projects & Internship", [
    ["Project 2 Data Collection", "Collect 50k+ real-world records where practical. Document sources, acquisition, schema, license, sampling, methodology and limitations."],
    ["Deliverable", "Create reproducible acquisition notes and raw data."]
  ]),

  makeDay(123, "Projects & Internship", [
    ["Project 2 Cleaning", "Handle missing values, duplicates, outliers, corrupt data, invalid types, category inconsistencies and leakage."],
    ["Deliverable", "Produce clean modeling data."]
  ]),

  makeDay(124, "Projects & Internship", [
    ["Project 2 EDA", "Perform univariate, bivariate and multivariate EDA, correlation, distributions, segmentation and hypothesis analysis."],
    ["Deliverable", "Write at least 10 meaningful findings."]
  ]),

  makeDay(125, "Projects & Internship", [
    ["Project 2 Feature Engineering", "Create domain features, encodings, scaling, transformations, interactions, feature selection and dimensionality reduction where useful."],
    ["Deliverable", "Create the final feature matrix."]
  ]),

  makeDay(126, "Projects & Internship", [
    ["Project 2 Modeling", "Train a baseline, linear/logistic model, tree, Random Forest and gradient booster. Record training time, validation metrics, test metrics and complexity."],
    ["Deliverable", "Create a model comparison table and select a baseline winner."]
  ]),

  makeDay(127, "Projects & Internship", [
    ["Project 2 Optimization", "Apply hyperparameter tuning, feature selection, improved preprocessing, cross-validation, threshold tuning and class balancing where appropriate."],
    ["Deliverable", "Document measurable improvements and trade-offs."]
  ]),

  makeDay(128, "Projects & Internship", [
    ["Project 2 Explainability", "Use SHAP for global feature importance, top 5 drivers and 3 individual prediction explanations. Interpret findings and limitations."],
    ["Deliverable", "Publish explainability visuals."]
  ]),

  makeDay(129, "Projects & Internship", [
    ["Project 2 Application", "Build Streamlit or Power BI with filtering, exploration, predictions, probabilities/scores and key findings."],
    ["Deliverable", "Create an interactive application/dashboard."]
  ]),

  makeDay(130, "Projects & Internship", [
    ["Project 2 Finalization", "Complete README, architecture, data dictionary, model methodology, metrics, screenshots, setup, GitHub, limitations and future work."],
    ["Deliverable", "Publish the final project."]
  ]),

  makeDay(131, "Projects & Internship", [
    ["Project 3 Planning", "Design SOURCE → INGESTION → RAW → VALIDATION → SPARK → TRANSFORMATION → WAREHOUSE → FEATURES → ML → APPLICATION."],
    ["Architecture Reasoning", "Define dataset scale, why distributed processing is justified, pipeline architecture, database, outputs and performance goals."]
  ]),

  makeDay(132, "Projects & Internship", [
    ["Project 3 Ingestion", "Implement multi-stage ingestion, raw storage, validation, logging, incremental ingestion, schema management and error handling."],
    ["Deliverable", "Create the ingestion pipeline."]
  ]),

  makeDay(133, "Projects & Internship", [
    ["Project 3 Warehouse", "Create fact table, dimensions, grain, keys, constraints, indexes and analytical schema."],
    ["Deliverable", "Implement the warehouse."]
  ]),

  makeDay(134, "Projects & Internship", [
    ["Project 3 Spark Pipeline", "Build RAW → SPARK → CLEAN → TRANSFORM → AGGREGATE → PARQUET with DataFrames, schemas, transformations, actions, partitioning and Parquet."],
    ["Deliverable", "Complete the Spark processing stage."]
  ]),

  makeDay(135, "Projects & Internship", [
    ["Project 3 Optimization", "Measure partitioning, shuffle, cache, repartition, coalesce, file formats, compression, predicate pushdown and partition pruning where applicable."],
    ["Deliverable", "Record before/after measurements and explain the optimization choices."]
  ]),

  makeDay(136, "Projects & Internship", [
    ["Project 3 Machine Learning", "Use pipeline-generated data for feature preparation, baseline model, model training, evaluation and explainability."],
    ["Engineering Goal", "Demonstrate Data Engineering → Machine Learning integration."]
  ]),

  makeDay(137, "Projects & Internship", [
    ["Project 3 Full Integration", "Connect source → ingest → validate → Spark → warehouse → features → ML → result."],
    ["Testing", "Test full run, incremental run, failure, recovery and rerun."]
  ]),

  makeDay(138, "Projects & Internship", [
    ["Project 3 Application", "Expose results through FastAPI, Streamlit or Power BI with predictions, analytics, KPIs, filtering and explanations."],
    ["Deliverable", "Build the application layer."]
  ]),

  makeDay(139, "Projects & Internship", [
    ["Project 3 Documentation", "Document architecture, data flow, technologies, why Spark, why PostgreSQL, ML methodology, optimization, setup, execution and limitations."],
    ["Deliverable", "Publish complete project documentation."]
  ]),

  makeDay(140, "Projects & Internship", [
    ["Project 3 Final QA & GitHub", "Check code, data, pipeline, Spark, database, ML, application and documentation."],
    ["Cleanup", "Remove broken files, secrets, temporary data, junk notebooks and unused code. Publish the final repository."]
  ]),

  makeDay(141, "Projects & Internship", [
    ["Architecture Review", "Standardize folder structures, naming, configuration, requirements, environment setup, README, documentation, logging, secrets and architecture diagrams across all projects."],
    ["Deliverable", "Create one consistent portfolio engineering standard."]
  ]),

  makeDay(142, "Projects & Internship", [
    ["Testing", "Learn unit tests, integration tests, fixtures, assertions, mocking concepts and edge cases. Test transformations, validators, utilities and pipeline logic."],
    ["Deliverable", "Add meaningful tests to at least one project."]
  ]),

  makeDay(143, "Projects & Internship", [
    ["Code Quality & Refactoring", "Review naming, functions, modules, DRY, single responsibility, duplication, error handling, configuration, type hints, docstrings, maintainability and complexity."],
    ["Deliverable", "Substantially refactor one project."]
  ]),

  makeDay(144, "Projects & Internship", [
    ["Advanced Git/GitHub", "Clone, branch, add, commit, pull, push, merge, rebase concept, conflict resolution, tags, releases, .gitignore, feature branches and pull-request workflow."],
    ["Practice", "Use a feature branch, create a conflict, resolve it and merge it."]
  ]),

  makeDay(145, "Projects & Internship", [
    ["Linux Deployment", "Server environment concepts, dependencies, virtual environments, environment variables, permissions, processes, logs, shell scripts, cron and service/process management concepts."],
    ["Deliverable", "Create a deployment guide."]
  ]),

  makeDay(146, "Projects & Internship", [
    ["Docker Production Practice", "Dockerfile, Compose, .dockerignore, environment configuration, persistent volumes and health-check concepts."],
    ["CI/CD + Deployment", "Understand source trigger → build → test → package → deploy → rollback. Perform a clean fresh-machine-style installation."]
  ]),

  makeDay(147, "Projects & Internship", [
    ["CV Engineering", "Write each project as Problem → Technology → Action → Result. Include measurable dataset size, pipeline stages, query/model metrics, performance improvements or dashboard outcomes."],
    ["CV Quality", "Avoid technology dumping, fake metrics and unsupported claims."]
  ]),

  makeDay(148, "Projects & Internship", [
    ["GitHub Portfolio", "Optimize profile README, pinned repositories, names, descriptions, screenshots, architecture diagrams, documentation and installation instructions."],
    ["Cleanup", "Remove unfinished, repetitive, broken or secret-containing repositories."]
  ]),

  makeDay(149, "Projects & Internship", [
    ["Technical Interview Revision", "Python structures, functions, scope, exceptions, files, OOP, iterators, generators, decorator concept and complexity. SQL joins, aggregation, CTEs, windows and optimization. DE ETL/ELT, validation, logging, PostgreSQL, warehousing, incremental loads, Spark, Docker, Linux and orchestration. ML regression, classification, clustering, metrics, CV, leakage, preprocessing and tuning."],
    ["Practice", "Explain answers aloud and solve representative coding/database/modeling problems."]
  ]),

  makeDay(150, "Projects & Internship", [
    ["SQL Interview Intensive", "Solve 20–30 problems covering SELECT, filtering, GROUP BY, HAVING, joins, self joins, subqueries, CTEs, window functions, ranking, running totals, dates, conditional aggregation, NULL handling, Top-N and deduplication."],
    ["Deliverable", "Create an SQL interview notebook."]
  ]),

  makeDay(151, "Projects & Internship", [
    ["Python + ML Interview Intensive", "Python coding, Pandas, NumPy, data structures and complexity. Explain scaling, train/test splits, cross-validation, precision/recall, ROC-AUC, overfitting, bias/variance, leakage, feature engineering, regularization, metrics, tree scaling and time-series validation."],
    ["Deliverable", "Create and answer a personal interview question bank."]
  ]),

  makeDay(152, "Projects & Internship", [
    ["Full Mock Interview", "Run a 60–90 minute mock covering Python, SQL, statistics, data engineering, machine learning, projects and behavioral communication."],
    ["Deliverable", "Record weak answers, coding mistakes and project weaknesses. Create the Top 5 fixes before applying."]
  ]),

  makeDay(153, "Projects & Internship", [
    ["FINAL CAPSTONE", "Build REAL DATA → INGESTION → RAW → VALIDATION → ETL/ELT → POSTGRESQL/WAREHOUSE → ANALYTICAL SQL → EDA → STATISTICS → FEATURE ENGINEERING → BASELINE → MULTIPLE ML MODELS → EVALUATION → TUNING → EXPLAINABILITY → API/DASHBOARD → DOCKER → GITHUB."],
    ["Final Technical Checklist", "Verify Python, SQL, databases, DE, Spark, statistics, Data Science, ML, Deep Learning, MLOps, Linux, Git, testing, Docker, documentation, portfolio, CV and presentation."],
    ["Graduation Gate", "Be able to explain the architecture, data flow, preprocessing, modeling decisions, metrics, optimization, deployment and engineering trade-offs without relying on notes."]
  ]),
]

export const TOTAL_DAYS = roadmap.length
export const TOTAL_TASKS = roadmap.reduce(
  (total, day) => total + day.tasks.length,
  0
)
