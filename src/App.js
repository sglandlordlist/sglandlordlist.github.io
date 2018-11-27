// Libs
import React, { Component } from "react";
import { Table } from "antd";

// Style
import "../node_modules/antd/dist/antd.css";

// Constant
import { DATA } from "./data.js";

const columns = [
  { title: "Building", dataIndex: "building", key: "0" },
  { title: "Unit", dataIndex: "unit", key: "1" },
  { title: "Landlord", dataIndex: "landlord", key: "2" },
  { title: "Phone", dataIndex: "phone", key: "3" },
  { title: "Period", dataIndex: "period", key: "4" },
  { title: "Rental", dataIndex: "rental", key: "5", render: data => <span>{`$${data}`}</span> },
  { title: "Deduction", dataIndex: "deduction", key: "6", render: data => <span>{`$${data}`}</span> },
  {
    title: "Other",
    dataIndex: "other",
    key: "7",
    render: data => <span>{`$${data}`}</span>
  },
  { title: "Comment", dataIndex: "comment", key: "8" },
  {
    title: "Details",
    key: "issue",
    fixed: "right",
    width: 100,
    render: data => (
      <a href={`https://github.com/sglandlordlist/sglandlordlist.github.io/issues/${data.issue}`}>#{data.issue}</a>
    )
  }
];

class App extends Component {
  state = {};

  componentDidMount() {
    const dataClone = [...DATA];
    this.setState({ data: dataClone, dataOrigin: dataClone });
  }

  handleInputFilterChange = event => {
    const { value } = event.target;

    const dataClone = [...this.state.dataOrigin];
    if (value.length === 0 || !value) {
      this.setState({ data: dataClone });
      return;
    }

    const dataFiltered = dataClone.filter(entry => {
      return entry.building.toLowerCase().includes(value.toLowerCase());
    });

    this.setState({ data: dataFiltered });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          <img className="app__logo" src="./apple-icon-180x180.png" />
          <span>Singapore Landlord List</span>
        </h1>
        <p>
          A list that tracks the behaviour of landlords in Singapore, good and bad, operating in public with full
          transparency.
        </p>

        <div className="bp3-input-group">
          <span className="bp3-icon bp3-icon-search" />
          <input
            className="bp3-input"
            type="search"
            placeholder="Search condominium or building name here ..."
            dir="auto"
            onChange={this.handleInputFilterChange}
          />
        </div>

        <br />

        <Table className="app__table" columns={columns} dataSource={data} scroll={{ x: 1300 }} pagination={false} />

        <p>
          Want to update this list or have any question? Please create an{" "}
          <a href="https://github.com/sglandlordlist/sglandlordlist.github.io/issues/new">issue</a>. We try to keep the
          list as close to the fact as possible but there is no guarantee.
        </p>
        <strong>
          No account? Register <a href="https://github.com/join">here</a>.
        </strong>
        <strong>
          Want to add more features to this page, check out its{" "}
          <a href="https://github.com/sglandlordlist/sglandlordlist.github.io">source code</a> on github.
        </strong>
        <h3>Read the following guidelines before creating an issue.</h3>
        <ul>
          <li>Fact, only fact and full fact.</li>
          <li>
            Keep both tenant's and landlord's privacy in mind. No personal identity info e.g. no full name, no full
            phone number. Mask personal inforation in attached images.
          </li>
          <li>Stay objective and polite.</li>
        </ul>
        <p>Issues not following the guidelines need to get updated otherwise will be deleted.</p>
      </div>
    );
  }
}

export default App;
