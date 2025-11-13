'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Wrapper from '@/components/basic/wrapper';
import SafeArea from '@/components/basic/safe-area';

export default function Home() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [stationsDone, setStationsDone] = useState<number[]>([]);

  useEffect(() => {
    const onboarded = Cookies.get('yt_onboarded') === '1';
    if (!onboarded) {
      router.replace('/onboarding');
      return;
    }
    // pull local progress for menu
    try {
      const s = JSON.parse(localStorage.getItem('yt_stations_done') || '[]');
      setStationsDone(Array.isArray(s) ? s : []);
    } catch {
      setStationsDone([]);
    }
    setReady(true);
  }, [router]);

  if (!ready) return null;

  const remaining = [1, 2, 3].filter(n => !stationsDone.includes(n));

  return (
    <Wrapper>
      <SafeArea mv={32}>
        <div className="card space-y-3">
          <h2 className="thunder-fw-bold-lc fs48 uppercase">¡Hola! Bienvenido/a a Ya Toca</h2>
          <p className="fs24">Este es un espacio para decir lo que pensamos, lo que sentimos y lo que queremos para nuestro país.</p>
          <br />
          {remaining.length === 0 ? (
            <p className="fs24">
              <b>Ya completaste el Cabildo.</b> Gracias por compartir. Tu voz ahora se une a la de miles de jóvenes que creen que sí podemos construir algo distinto.
            </p>
          ) : (
            <>
              <p className="fs24">¿Qué te gustaría hacer?</p>
              <ul className="list-disc pl-6 space-y-2">
                {/* <li><a className="underline fs24" href="/free-message">Dejar mensaje libre</a></li> */}
                {remaining.includes(1) && <li><a className="underline fs24" href="/cabildos/station-one">Estación 1</a></li>}
                {remaining.includes(2) && <li><a className="underline fs24" href="/cabildos/station-two">Estación 2</a></li>}
                {remaining.includes(3) && <li><a className="underline fs24" href="/cabildos/station-three">Estación 3</a></li>}
              </ul>
            </>
          )}
          <br />
        </div>
      </SafeArea>
    </Wrapper>
  );
}
