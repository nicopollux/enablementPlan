import quip from "quip";
import App from "./App.jsx";

class PlanRoot extends quip.apps.RootRecord {
    static getProperties() {
      return {
        myPlan: "string"
      };
    }
  }
quip.apps.registerClass(PlanRoot, "root");

quip.apps.initialize({
    initializationCallback: function(rootNode, params) {
        const rootRecord = quip.apps.getRootRecord();
        if (params.isCreation) {
            rootRecord.set("myPlan", '');
          }
        ReactDOM.render(<App/>, rootNode);
    }
});
