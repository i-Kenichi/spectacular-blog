import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header">
                <div className="post-meta"></div>

                </header>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                <div className="post-subtitle">
                  {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                </div>
                }
                {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                <div className="post-thumbnail">
                  <img className="thumbnail" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />

                    <time className="post-time-inimg"
                      dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</time>

					<h1 className="post-title-inimg">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                	{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
	            </div>
                }
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
              </article>
            </Layout>
        );
    }
}
