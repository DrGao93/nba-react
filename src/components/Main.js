import React from 'react';
import { ShotChart } from './ShotChart';
import { Profile } from './Profile';
import nba from 'nba';

export class Main extends React.Component {
  state = {
    playerInfo: {},
  };

  componentDidMount() {
    nba.stats.playerInfo({ PlayerID: 201939 })
      .then((response) => {
        const playerInfo = Object.assign(response.commonPlayerInfo[0], response.playerHeadlineStats[0]);
        console.log(playerInfo);
        this.setState({ playerInfo });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { playerInfo } = this.state;
    return (
      <div className="main">
        <Profile playerInfo={playerInfo} />
        <ShotChart playerId={201939} />
      </div>
    );
  }
}