import * as React from 'react';
import { Component, } from 'react'

import { Button } from '@material-ui/core';

import './Banner.css';
import email from './email-banner.jpg';
import vertical from './vertical-banner.jpg';

export interface IBannerProps {
  bannerHash: string | number
}

export interface IBannerState {
  id: number;
  button_text: string;
  button_color: string | null;
  description: string;
  email_banner: boolean;
  img_url: string;
  redirect_url: string;
  sponsored_by: string;
  title: string;
}

export default class Banner extends Component<IBannerProps, IBannerState> {

  private testbanner: IBannerState[] = [
    {
      id: 0,
      button_text: 'Button Text',
      button_color: null,
      description: 'Banner Description',
      email_banner: false,
      img_url: vertical,
      redirect_url: 'string',
      sponsored_by: 'Sponsoring Firm',
      title: 'Banner Title'
    },
    {
      id: 1,
      button_text: 'Button Text',
      button_color: null,
      description: 'Banner Description',
      email_banner: true,
      img_url: email,
      redirect_url: 'string',
      sponsored_by: 'Sponsoring Firm',
      title: 'Banner Title'
    },
  ];

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
    if (typeof bannerHash !== 'string') {
      return this.testbanner[bannerHash]
    }
    return fetch(`/api/bannerhash/${bannerHash}`)
      .then(resp => resp.json())
      .then(data => data.banner)
      .catch(reason => { throw new Error(reason) })
  }

  public renderVerticalBanner() {
    return (
      <div className="bannercontainer vertical">
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
  public renderEmailBanner() {
    return (
      <div className="bannercontainer email">
        <img src={this.state.img_url} />
      </div>
    )
  }
  public render() {
    return this.state.email_banner ? this.renderEmailBanner() : this.renderVerticalBanner()
  }
}