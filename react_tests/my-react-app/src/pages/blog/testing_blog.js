// src/pages/BlogOnePage.js
import React from 'react';

const BlogOnePage = () => {
  return (
    <div>
      <div class="limit_width">
        <div style={{ whiteSpace: 'pre-line' }}>
        <h1>Testing Blogpost</h1>
      {'\n'}{'\n'}
      {/* <img src="/blog_media/once_and_forever/closeup.jpg" style={{ display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} /> */}
      <p>
        At the early stages in my role at Pulse Analytics, we were manually building, testing, and pushing docker 
        containers into our Github Container Repository. These were the images that EC2 was reaching for and running 
        when Airflow DAGs were called to kick off a certain task. It was a pipeline that got the job done but didn’t 
        have much room for flexibility, not much had been developed in terms of CI/CD and, frankly, at that time it hadn’t 
        been very necessary. Slowly as projects became bigger and required more complex business logic, as well as 
        relating more heavily on input and output from other tasks which we were all collaborating on at once, it became 
        clear that a testing framework was something that had to be built out.
        {'\n'}{'\n'}
        Initially, CI/CD took the form of GitHub actions which abstracted the manual build and push of our docker 
        containers. We’d finish a PR, manually test it, and once it was properly QA’d between the Engineer and Product 
        Manager, we’d merge it in. That merge would trigger the action which would build the most recent container and 
        drop it into our ghcr. Initially we considered mock testing in a unit test sort of fashion. This would be something 
        we could fully implement on our own, but would overlook significant integrated features and the unit tests 
        could be refined to pass while actual production code would have bugs. 
        {'\n'}{'\n'}
        We communicated with our backend team about building out those new endpoints. It wouldn’t be very difficult, 
        just a duplication of the production stack but with a new URL – this time prefaced with the word “test”. They 
        began efforts for that and we slowly integrated the variability into our configuration files. Our config files 
        maintained most hardcoded variables we’d use in our programs, each container had one. Slowly we added in if 
        clauses, looking for the environment variables “runtime_env” which would determine if the “test” prefix was 
        added to our relevant endpoints.
        {'\n'}{'\n'}
        Now came time for a simple and essential component, which was a distinction of testing containers as 
        opposed to production. The CI/CD GitHub actions that served to build our containers was just a .yml file 
        that triggered on a merge to main and built a specific container name. All we had to do was duplicate that .yml 
        file; we changed it so that it triggered on a push to a specific file path rather than a merge to main from that 
        file path. When the push occurred we’d build the very same container but give it a suffix “test”. This way, 
        whenever a file path was altered by a PR, that PR code would build into the test container, but only upon merging 
        the code would the production container be built.
        {'\n'}{'\n'}
        <div className="image123" style={{ display: 'flex' }}>
      <div style={{ flex: '1', margin: '0 2%' }} className="imgContainer">
        <img src="/blog_media/testing_blog_media/test-yml.png" style={{ width: '100%', height: 'auto' }} alt="Image 1" />
      </div>
      <div style={{ flex: '1', margin: '0 2%' }} className="imgContainer">
        <img src="/blog_media/testing_blog_media/prod-yml.png" style={{ width: '90%', height: 'auto' }} alt="Image 2" />
      </div>
    </div>
        {'\n'}{'\n'}
        The final piece of the pipeline wasn’t the most straightforward. We had to alter our Airflow DAGs so we 
        could easily switch between the test and production tasks. While we didn’t manage to find a way to isolate a 
        prod/test combo to a single .yml file in the actions, we didn’t much care about that; the files were short 
        enough and we had an organized .workflows file, and there was no major benefit to that conglomeration outside 
        of organization. We were working to complete this as quickly as possible so we left it as is. This was different 
        when approaching our DAGs. We did not want to bloat our Airflow console and trying to manage many different 
        DAGs per project would be unnecessary. We had to create environment variables in Airflow to be injected into 
        our docker containers and also allow for ease of switching between test and production images that were being called. 
        {'\n'}{'\n'}
        <img src="/blog_media/testing_blog_media/directory-structure.png" style={{ display: 'block', width: '20%', marginLeft: 'auto', marginRight: 'auto' }} />
        {'\n'}{'\n'}
        We first took a look at the configuration for Airflow which took in runtime variables from the console. 
        This was easy enough but the transfer of those variables was difficult; the documentation did not define 
        well how to extract those configurations and inject them into containers. We eventually determined that DAG 
        definitions could take in the environment variables as DAG params. Our definition could be along the lines of 
        {'“params={“RUNTIME_ENV”: Param(“test”, enum[“test”, “production”], type=“string”)}'} and our DAG would then have a 
        param.RUNTIME_ENV variable. Extracting the value was difficult but eventually we realized that Jinja syntax 
        was required. We’d have our EcsRunTaskOperator define all of our typical task features like task_id and 
        task_definition, but an attribute overrides would be defined as a dictionary of environment variables. The name 
        would be assigned to “RUNTIME_ENV” which is what our container would receive, and the value would be 
        {'“{{ params.RUNTIME_ENV }}”'}. This way our Airflow config variables can properly be injected. 
        {'\n'}{'\n'}
        There is one last distinction that was brushed over though; the EcsRunTaskOperator identifying task_id and 
        task_definition along with other attributes should be more dynamic to identify test/prod task variables. 
        Simply put, we create multiple based on env in an environments dictionary. [“test”, “prod”] lead us to have 
        two operators both contained in a simple task[“env”] dictionary format, and a BranchPythonOperator selects 
        which to run based on a python_callable check_runtime_env. If our context[“params”][“RUNTIME_ENV”] is production 
        we return that container name with the environment suffixed. 
        {'\n'}{'\n'}
        This enables a clean definition of the run control flow:
        {'\n'}{'\n'}     
        branch_task {'>>'} [task[“test”], task[“prod”]]
        {'\n'}{'\n'} 
        The exploration of these environment variables led us to more complex run configurations — our pipelines could 
        run single input mvp runs that would finish significantly faster than runs involving entire collections. 
        {'\n'}{'\n'} 
        The final point of note for this pipeline was the synchronization between our testing and production endpoints. 
        Running multiple DAGs that have time dependent output in production and test environment would result in distinctly 
        different data. This was expected but to test certain production cases in that testing environment demanded 
        that unique data from production exists in test. A final dump bash file was made, which did receive its own 
        Airflow DAG for ease of use. It connected with AWS CLI to pull our secrets manager for credentials, before 
        dropping all test database tables, then dumping production tables into a tmp directory, and immediately 
        restoring them to the test database. Notably, such a drop ruined our foreign key relationships; in most cases 
        we didn’t need these, but for best practice, we extended the dump and restore script to run all of the alter, 
        and create index commands. That way the table relationships in our test environment would, in fact, mirror the 
        production relationships.
        {'\n'}{'\n'} 
        {'\n'}{'\n'} 
                {'\n'}{'\n'} 

      </p>
    </div>
    </div>
    </div>
  );
};

export default BlogOnePage;
