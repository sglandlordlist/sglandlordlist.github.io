import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Singapore Landlord List </h1>
        <p>
          A list that tracks the behaviour of landlords in Singapore, good and bad, operating in public with full
          transparency.
        </p>

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
