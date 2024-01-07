const getContributors = async (repoName) => {  
    let request = await fetch(`https://api.github.com/search/users?q=type:user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let contributorsList = await request.json();
    console.log(contributorsList.total_count);
    return contributorsList;
}

//temp comment
//getContributors();

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `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` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);
