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

getContributors();