import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../button';
import YoutubeVideo from '../../youtube-video';
import { LayoutContainer, LayoutSplit } from '../../layout';
import nomiosImage from '../../../media/images/video-thumbnail.jpg';
import styles from './Concept.module.css';

class Concept extends Component {
    render() {
        const { className } = this.props;

        return (
            <LayoutSplit
                id="concept"
                splitAt="medium"
                left={ this.renderLeft() }
                right={ this.renderRight() }
                className={ classNames(styles.concept, className) } />
        );
    }

    renderLeft() {
        return (
            <LayoutContainer
                variant="split-left"
                className={ styles.leftSide }
                contentClassName={ styles.leftSideContent }>
                <div className={ styles.wrapper }>
                    <div className={ styles.title }>The concept</div>
                    <div className={ styles.description }>
                        Nomios is an identity wallet built on the IDM (Identity Manager) concept and specification.
                    </div>

                    <Button
                        variant="secondary"
                        element={ <a href="https://github.com/ipfs-shipyard/pm-idm/blob/master/docs/idm-concept.md" target="_blank" rel="noopener noreferrer" /> }
                        className={ styles.cta }>
                        Learn more
                    </Button>
                </div>
            </LayoutContainer>
        );
    }

    renderRight() {
        return (
            <LayoutContainer
                variant="split-right"
                className={ styles.rightSide }
                contentClassName={ styles.rightSideContent }>
                <div className={ styles.videoBox }>
                    <YoutubeVideo
                        thumbnail={ nomiosImage }
                        videoId="_5V3DB5_gA4" />
                </div>
            </LayoutContainer>
        );
    }
}

Concept.propTypes = {
    className: PropTypes.string,
};

export default Concept;
