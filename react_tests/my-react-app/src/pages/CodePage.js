// src/pages/CodePage.js
import React from 'react';

const CodePage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
      <p>
        <h4>Pulse Analytics</h4>
        I'm currently a Data Engineer with Pulse Analytics, since 2022. Our data processing can be highly variable to meet the demands 
        of our consulting side, <a href="https://dedhamgroup.com/" target="_blank" rel="noopener noreferrer">The Dedham Group</a>. We use the most current 
        technologies for creating our data extraction and processing pipelines. We work mostly with Python in typical libraries such as Pandas or Numpy. Poetry serves 
        as our package manager and we dockerize our programs for execution via Apache Airflow in AWS. Our django backend allows for straightfoward 
        data manipulation. Data Quality is assured preemptively with data environment testing, unit tests, and integration testing. Downstream 
        quality assurance is maintained with Power BI dashboarding as well as Great Expectations suites. Depending on the type of data and the 
        required processing / cleaning we use various tools in our ETLS. From libraries such as Apryse, Selenium, or the Twitter API to UIPath RPA work. 
        We maintain strong data integrity, ensuring flexible, robust, and scalable programs.
        {'\n'}{'\n'}
        <h4>Letterboxd API and Statistics</h4>
        A wrapped statistics page for Letterboxd users based on their movie data. Details can be found on the Blog page. 
        Django serves as the main driver for hosting the code, running the Python program for any users. Prospective work hopes to 
        productionize in the next year alongside a custome django api. This project has been in development since late 2021.
        {'\n'}{'\n'}
        <h4>Accenture Federal Services</h4>
        I was a big data engineer with Accenture Federal Services from 2019 to 2022. Our ETL was fully engaged with the Apache Hadoop ecosystem. 
        We had ingest from Apache NiFi with AWS S3 backups into HDFS for processing with Map Reduce. We used Apache Hive to 
        actively interact with the data. Our workflow manager was conducted with Apache Oozie, scheduling Java via XML workflows. 
        Downstream business analysts leveraged Tableau, populated by downstream workflows we developed in a more analytics engineering role. 
        Ad hoc requests were not uncommon and often were handled explicitly with Hive. 
        Testing was an essential component of this pipeline, and while senders providing our data had cleaned it, 
        we included technical and functional validations within our NiFi flows and processing jobs. 
        Our jobs were thoroughly tested before deployment by working intimately with unit testing teams, 
        verifying for explicit logical outcomes over handmade data and cases, testing with random samples of production data, 
        and testing performance over large amounts of data. We worked closely with business analysts to implement explicit functional tests that validated business logic. 
        {'\n'}{'\n'}
        <h4>Research</h4>
        Research in 2018 at Bucknell University under Professor Lea Wittie. <a href="https://peer.asee.org/bias-in-first-year-engineering-student-peer-evaluations" target="_blank" rel="noopener noreferrer">Paper</a> accepted and published by the American Society for Engineering Education 2021 Conference.
        {'\n'}{'\n'}
        {'\n'}{'\n'}
        {'\n'}{'\n'}
        {'\n'}{'\n'}
        {'\n'}{'\n'}
        {'\n'}{'\n'}
        </p>
        </div>
        </div>
    </div>
  );
};

export default CodePage;
