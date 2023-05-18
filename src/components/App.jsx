import React, { Component } from 'react';
import getImages from '../services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import c from './Loader/Loader.module.css';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    input: '',
    query: [],
    error: null,
    status: 'idle',
    showModal: false,
    largeImg: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.input;
    const prevQuery = prevState.input;
    const nextPage = this.state.page;
    const prevPage = prevState.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      getImages(nextQuery, nextPage)
        .then(({ hits }) =>
          this.setState({
            query: [...prevState.query, ...hits],
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  formSubmit = input => {
    this.setState({ input: input.toLowerCase() });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  handleClickImg = e => {
    const large = e.currentTarget.dataset.src;
    this.setState({ largeImg: large, showModal: true });
  };
  handleClickLoad = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { showModal, query, largeImg, status, error } = this.state;
    return (
      <>
        <ToastContainer />
        {status === 'rejected' && <h1>{error.message}</h1>}
        <Searchbar formSubmit={this.formSubmit} />
        <ImageGallery query={query} onClickImg={this.handleClickImg} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImg} alt="" />
          </Modal>
        )}
        {status === 'pending' && <Loader />}
        {query.length >= 12 && <Button onClick={this.handleClickLoad} />}
      </>
    );
  }
}
