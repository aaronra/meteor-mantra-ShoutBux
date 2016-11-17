import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="home">
        <div className="row">
          <div className="col-md-4 col-xs-4">
            <div className="user-container">
              <div className="panel panel-default userBox">
                <div className="panel-body">

                  <p>Hello <strong>user</strong>,
                    welcome to twitterClone w react</p>
                  <table className="table">
                    <tr>
                      <td className="tableHeader">Tweets</td>
                      <td className="tableHeader">Following</td>
                      <td className="tableHeader">Followers</td>
                    </tr>
                    <tr>
                      <td className="tableContent">1</td>
                      <td className="tableContent">2</td>
                      <td className="tableContent">2</td>
                    </tr>
                  </table>

                  <textarea
                    ref="textarea"
                    id="tweetText"
                    className="form-control"
                    placeholder="What's happening?"
                    rows="3">
                    
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 col-xs-8">
            <div className="tweetbox-container">
              <div className="tweetfeed-container">
                <div className="panel panel-default tweetfeed">
                  <div className="panel-body">

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
