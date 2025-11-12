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

  function markStationDone(n: 1 | 2 | 3) {
    const s = JSON.parse(localStorage.getItem('yt_stations_done') || '[]');
    const set = new Set<number>(Array.isArray(s) ? s : []);
    set.add(n);
    const arr = Array.from(set).sort();
    localStorage.setItem('yt_stations_done', JSON.stringify(arr));
  }

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
          <h2 className="text-xl font-semibold">Bienvenido/a</h2>

          {remaining.length === 0 ? (
            <p>
              Ya completaste el Cabildo. Deja tu{' '}
              <a className="underline" href="/free-message">mensaje libre</a>
              {' '}cuando quieras.
            </p>
          ) : (
            <>
              <p>Selecciona una opción:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a className="underline fs16" href="/free-message">Dejar mensaje libre</a></li>
                {remaining.includes(1) && <li><a className="underline fs16" href="/cabildos/station-one">Estación 1</a></li>}
                {remaining.includes(2) && <li><a className="underline fs16" href="/cabildos/station-two">Estación 2</a></li>}
                {remaining.includes(3) && <li><a className="underline fs16" href="/cabildos/station-three">Estación 3</a></li>}
              </ul>
            </>
          )}
          <br />
        </div>
      </SafeArea>
    </Wrapper>
  );
}
