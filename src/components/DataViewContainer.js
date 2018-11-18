import React from 'react';
import {Row, Col} from 'antd';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
    }

    onMinCountChange = (minCount) => {
        this.setState({ minCount });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount}/>


                <Row>
                    <Col span={2} offset = {3}>shots:</Col>
                    <Col span={16} > <CountSlider onMinCountChange={this.onMinCountChange}/></Col>
                </Row>
            </div>
        );
    }
}