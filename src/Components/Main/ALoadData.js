import ALoadFIOS from "./ALoadFIOS";
import AAddTask from '../AddTask/AAddTask';

let ALoadData = () => {
  return dispatch => {
    fetch("http://localhost:9999/unclosed")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.forEach(el => {
          switch (el.TYPE) {
            case "TRANSFER":
              dispatch(
                AAddTask({
                  typ: 0,
                  WHO: el.WHO,
                  REASON: el.REASON,
                  FROM: el.FROM,
                  TO: el.TO,
                  WHENSTART: el.START,
                  WHENEND: el.END
                })
              );
              break;
            case "CLOSE":
              dispatch(
                AAddTask({
                  typ: 2,
                  WHO: el.WHO,
                  REASON: el.REASON,
                  WHEN: el.WHEN
                })
              );
              break;
            case "ADD RIGHTS":
              dispatch(
                AAddTask({
                  typ: 1,
                  WHO: el.WHO,
                  REASON: el.REASON,
                  WHENSTART: el.START,
                  WHENEND: el.END,
                  TO: el.TO
                })
              );
              break;
          }
        });
      })
      .catch(alert);
  };
};

export default ALoadData;
