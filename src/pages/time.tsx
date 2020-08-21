import { NextPage } from "next";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime); // For fromNow()
dayjs.extend(utc); // From Timezone
dayjs.extend(timezone);
dayjs.locale("ko");

interface TimePageProps {}

const TimePage: NextPage<TimePageProps> = () => {
  const standardTimeDate = "2020-08-21 00:00";
  const standardTime = dayjs(standardTimeDate);
  const userTimeZone = dayjs.tz.guess();
  const userTime = standardTime.tz(userTimeZone);

  return (
    <div>
      <h2>TimePage</h2>
      <div>standardTime : {standardTimeDate}</div>
      <div>fromNow : {userTime.fromNow()}</div>
      <ul>
        <li>
          Asia/Seoul Time :
          {dayjs(standardTimeDate).tz("Asia/Seoul").format("YYYY/MM/DD HH:mm")}
        </li>
        <li>
          Europe/Berlin Time :
          {dayjs(standardTimeDate)
            .tz("Europe/Berlin")
            .format("YYYY/MM/DD HH:mm")}
        </li>
        <li>
          America/New_York Time :
          {dayjs(standardTimeDate)
            .tz("America/New_York")
            .format("YYYY/MM/DD HH:mm")}
        </li>
      </ul>
    </div>
  );
};

export default TimePage;
