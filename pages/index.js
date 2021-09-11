import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout.js';

const Github = props => (
  <Layout>
    <h1>Top JavaScript Repos</h1>
    <ul>
      {props.repos.map(repo => (
        <li key={repo.node_id}>
          <Repo repo={repo} />
        </li>
      ))}
    </ul>
    <style jsx>{`
            h1 {
                font-family: 'Arial';
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            li {
                padding: 16px 0;
                border-bottom: 1px solid #ccc;
            }
        `}</style>
  </Layout>
);

const Repo = ({ repo }) => (
  <React.Fragment>
    <h3>
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
    <p>{repo.description}</p>
    <p>
      <em>
        {repo.language}, {repo.forks} forks, {repo.stargazers_count}{' '}
        stars
      </em>
    </p>
    <style jsx>{`
            h3 {
                margin: 0;
                font-size: 20px;
                font-weight: 500;
                line-height: 1.5;
            }
            p {
                font-family: 'Arial';
            }
            a {
                color: #0366d6;
                text-decoration: none;
                font-family: 'Arial';
                cursor: pointer;
            }

            a:hover {
                text-decoration: underline;
            }
        `}</style>
  </React.Fragment>
);

Github.getInitialProps = async function(context) {
  const res = await fetch(
    'https://api.github.com/search/repositories?q=language:javascript%20stars:>10000&sort=stars&order=desc'
  );
  const response = await res.json();
  const repos = response.items;

  console.log(`Fetched ${repos.length} repos`);

  return { repos };
};

export default Github;
