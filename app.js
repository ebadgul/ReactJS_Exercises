var ReactDOM = require('react-dom')
    var React = require('react')


     var Subjects = React.createClass({
        render: function(){
            var list = this.props.subjects.map(function(subject, index){
                  return (
                    <tr >
                      <td>{subject.name} </td>
                      <td>{subject.noLectures}</td>
                      <td>{subject.noPracticals}</td>
                    </tr>
                    );
                });
            return (
              <div>
                <h1>{this.props.course} Modules table </h1>
                       <table className="table table-bordered">
                 <thead>
                    <tr>
                    <th>Name</th>
                    <th>No lectures</th>
                    <th>No practicls</th>
                    </tr>
                </thead>
                <tbody >
                    {list}
                </tbody >
              </table>
              </div>
            );
        }
    });

    var subjectList = [
               {name: 'Software Frameworks', noLectures: 3, noPracticals: 2},
               {name: 'Dynamic web Developmnt', noLectures: 3, noPracticals: 2}
            ] ;
    var name = 'SSD 4' ;
    ReactDOM.render(<Subjects subjects={subjectList} course={name} />,
        document.getElementById('mount-point')
    );