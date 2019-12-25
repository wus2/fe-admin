import moment from "moment";

const Moment = (time) => {
    return moment(time * 1000);
}

export default Moment;