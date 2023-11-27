import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "../style.css";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Timer = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen md:w-screen md:h-screen">
      <p className="countdown-text">SANTA IS COMING!</p>
      <div className="bg-black/70 absolute w-full h-full"></div>
      <div className="absolute flex flex-col items-center text-center">
        <FlipClockCountdown
          to={"2023-12-25T00:00:00"}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
      </div>
    </section>
  );
};

export default Timer;
