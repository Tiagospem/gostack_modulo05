import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Loading, Owner, IssueList, ButtonGroup, Filter } from './styles';
import Container from '../../components/Container';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    page: 1,
    repository: {},
    issues: [],
    loading: true,
    pageLoading: false,
    activeState: 'open',
    filters: [
      { state: 'open', label: 'Open' },
      { state: 'all', label: 'All' },
      { state: 'closed', label: 'Closed' },
    ],
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repouri: repoName,
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadInssues = async state => {
    const { repouri, page } = this.state;

    await this.setState({ pageLoading: true });

    const response = await api.get(`/repos/${repouri}/issues`, {
      params: {
        state,
        per_page: 5,
        page,
      },
    });
    this.setState({
      issues: response.data,
      activeState: state,
      pageLoading: false,
    });
  };

  handleStateChange = async state => {
    const { activeState } = this.state;
    if (state !== activeState) {
      await this.setState({ page: 1 });
      this.loadInssues(state);
    }
  };

  handlePageChange = async action => {
    const { activeState, page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadInssues(activeState);
  };

  render() {
    const {
      issues,
      repository,
      loading,
      filters,
      page,
      activeState,
      pageLoading,
    } = this.state;
    if (loading) {
      return <Loading>Carregando...</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <Filter>
          {filters.map(f => (
            <button
              type="button"
              key={f.state}
              onClick={() => this.handleStateChange(f.state)}
            >
              {activeState === f.state ? (
                <strong>{f.label}</strong>
              ) : (
                <span>{f.label}</span>
              )}
            </button>
          ))}
        </Filter>
        <IssueList loading={pageLoading}>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <ButtonGroup>
          <button
            disabled={page < 2}
            onClick={() => this.handlePageChange('back')}
            type="button"
          >
            Anteriror
          </button>
          <span>Pagina {page}</span>
          <button onClick={() => this.handlePageChange('next')} type="button">
            Proximo
          </button>
        </ButtonGroup>
      </Container>
    );
  }
}

export default Repository;
