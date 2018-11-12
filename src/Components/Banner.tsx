import * as React from 'react';
import { Component, } from 'react'

import './Banner.css';
import { Button } from '@material-ui/core';

export interface IBannerProps {
  bannerHash: string | number
}

export interface IBannerState {
  id: number;
  button_text: string;
  button_color: string;
  description: string;
  email_banner: boolean;
  img_url: string;
  redirect_url: string;
  sponsored_by: string;
  title: string;
}

export default class Banner extends Component<IBannerProps, IBannerState> {


  constructor(props: IBannerProps) {
    super(props);
    this.state = {
      email_banner: true
    } as IBannerState
  }

  public componentDidMount() {
    this.fetchBannerByHash(this.props.bannerHash)
      .then(data => this.setState(data))
  }

  /**
   * fetchBannerByHash from DB
   */
  public async fetchBannerByHash(bannerHash: string | number): Promise<IBannerState> {
    return fetch(`/api/bannerhash/${bannerHash}`)
      .then(resp => resp.json())
      .then(data => data.banner)
      .catch(reason => { throw new Error(reason) })
  }

  public render() {
    return (
      <div className="bannercontainer">
        {this.state.sponsored_by ? (<span className={"banner-sponsor"}>{this.state.sponsored_by}</span>) : null}
        {this.state.title ? (<span className={"banner-title"}> {this.state.title} </span>) : null}
        {this.state.img_url ? <img src={this.state.img_url} /> : ''}
        {this.state.description ? (
          <div style={{ marginBottom: '8px' }}>
            {this.state.description ? (<span className="banner-description" > {this.state.description} </span>) : ''}
          </div>
        ) : ''}
        {!this.state.email_banner ? (
          <Button variant="contained" style={{ background: this.state.button_color || "#2196f3" }}>{this.state.button_text}</Button>) : null}
      </div>
    )
  }
}