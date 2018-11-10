import * as React from 'react';
import { Component, CSSProperties } from 'react'

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

  private titleStyle = {
    fontSize: '1em',
    fontWeight: 600,
    display: 'inline-block',
    paddingBottom: '8px'
  }
  private imgStyle = {
    margin: '0 0 8px 0',
    cursor: 'pointer'
  }
  private buttonStyle: CSSProperties = { /** say it's CSSProperties to work around fontWeight */
    fontWeight: 'bold',
    padding: '10px',
    height: 'auto',
    minHeight: '1em',
    lineHeight: '1.5em',
    width: '100%',
    textTransform: 'capitalize',
    background: this.state.button_color ? this.state.button_color : '#2196f3'
  }
  private descriptionStyle = {
    display: 'inline-block',
    width: '100%',
    color: '#707070',
    lineHeight: '1.4em',
    fontSize: '0.8em'
  }

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
      <div  >
        {this.state.id || null}
        {this.state.redirect_url || null}
        {this.state.sponsored_by || null}
        {this.state.title ? (<span style={this.titleStyle}> {this.state.title} </span>) : null}
        {this.state.img_url ? <img src={this.state.img_url} style={this.imgStyle} /> : ''}
        {this.state.description ? (
          <div style={{ marginBottom: '8px' }}>
            {this.state.description ? (<span style={this.descriptionStyle}> {this.state.description} </span>) : ''}
          </div>
        ) : ''}
        {!this.state.email_banner ? (
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={this.buttonStyle}>
            {this.state.button_text}
          </button>) : null}
      </div>
    )
  }
}