import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  state = {
    worlds: [],
  };

  componentDidMount() {
    this.loadWorlds();
  }

  loadWorlds = async () => {
    const response = await api.get("/v2/worlds.json");
    this.setState({ worlds: response.data.worlds.allworlds });
  };

  render() {
    const { worlds } = this.state;

    return (
      <div className="world-list">
        {worlds.map((world) => (
          <article key={world.name}>
            <strong>
              {world.name} ({world.worldtype})
            </strong>
            <p>
              <strong>Online:</strong> {world.online}
            </p>
            <p>
              <strong>Location:</strong> {world.location}
            </p>
          </article>
        ))}
      </div>
    );
  }
}
