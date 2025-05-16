
import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string; // format: 'YYYY-MM-DD HH:MM:SS'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  if (isExpired) {
    return (
      <div className="text-white bg-impacto-darkred bg-opacity-70 py-3 px-6 rounded-md inline-flex items-center justify-center font-military mt-3 animate-pulse">
        ⛔️ Inscrições Encerradas
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-nowrap justify-center gap-1 md:gap-4">
      <div className="flex flex-col items-center bg-impacto-darkgray bg-opacity-70 py-1 px-2 md:py-3 md:px-6 rounded-md">
        <span className="text-lg md:text-3xl font-stencil text-white">{formatTime(timeLeft.days)}</span>
        <span className="text-xs md:text-sm text-gray-300 font-military uppercase">Dias</span>
      </div>
      <div className="flex flex-col items-center bg-impacto-darkgray bg-opacity-70 py-1 px-2 md:py-3 md:px-6 rounded-md">
        <span className="text-lg md:text-3xl font-stencil text-white">{formatTime(timeLeft.hours)}</span>
        <span className="text-xs md:text-sm text-gray-300 font-military uppercase">Horas</span>
      </div>
      <div className="flex flex-col items-center bg-impacto-darkgray bg-opacity-70 py-1 px-2 md:py-3 md:px-6 rounded-md">
        <span className="text-lg md:text-3xl font-stencil text-white">{formatTime(timeLeft.minutes)}</span>
        <span className="text-xs md:text-sm text-gray-300 font-military uppercase">Minutos</span>
      </div>
      <div className="flex flex-col items-center bg-impacto-darkgray bg-opacity-70 py-1 px-2 md:py-3 md:px-6 rounded-md">
        <span className="text-lg md:text-3xl font-stencil text-white">{formatTime(timeLeft.seconds)}</span>
        <span className="text-xs md:text-sm text-gray-300 font-military uppercase">Segundos</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
