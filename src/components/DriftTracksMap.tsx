import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const driftTracks = [
  {
    id: 1,
    name: 'Ebisu Circuit',
    location: 'Fukushima, Япония',
    country: 'Япония',
    region: 'Азия',
    coordinates: { x: 75, y: 35 },
    description: 'Легендарная Мекка дрифта. 8 различных трасс, включая знаменитые Minami и Higashi.',
    founded: 1990,
    events: ['D1 Grand Prix', 'Matsuri Festival', 'Drift Tengoku'],
    difficulty: 'Высокая',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    famous: true,
  },
  {
    id: 2,
    name: 'Irwindale Speedway',
    location: 'California, США',
    country: 'США',
    region: 'Северная Америка',
    coordinates: { x: 15, y: 40 },
    description: 'Домашняя арена Formula Drift. Овальная трасса NASCAR, переоборудованная под дрифт.',
    founded: 2004,
    events: ['Formula Drift Finals', 'Irwindale Drift Night'],
    difficulty: 'Средняя',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
    famous: true,
  },
  {
    id: 3,
    name: 'Biķernieki Track',
    location: 'Рига, Латвия',
    country: 'Латвия',
    region: 'Европа',
    coordinates: { x: 52, y: 25 },
    description: 'Главная арена Drift Masters European Championship. Современная трасса с высокими скоростями.',
    founded: 2014,
    events: ['Drift Masters GP', 'King of Riga'],
    difficulty: 'Высокая',
    image: 'https://images.unsplash.com/photo-1552519507-da3ad6b67376?w=600&q=80',
    famous: true,
  },
  {
    id: 4,
    name: 'Autopolis',
    location: 'Oita, Япония',
    country: 'Япония',
    region: 'Азия',
    coordinates: { x: 77, y: 38 },
    description: 'Живописная трасса в горах. Сложные повороты и перепады высот.',
    founded: 1995,
    events: ['D1 Grand Prix', 'Super GT'],
    difficulty: 'Очень высокая',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    famous: false,
  },
  {
    id: 5,
    name: 'Long Beach Street Circuit',
    location: 'California, США',
    country: 'США',
    region: 'Северная Америка',
    coordinates: { x: 14, y: 42 },
    description: 'Городская трасса. Открытие сезона Formula Drift на улицах Лонг-Бич.',
    founded: 2005,
    events: ['Formula Drift Round 1'],
    difficulty: 'Высокая',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80',
    famous: true,
  },
  {
    id: 6,
    name: 'Greinbach Drift Circuit',
    location: 'Штирия, Австрия',
    country: 'Австрия',
    region: 'Европа',
    coordinates: { x: 50, y: 28 },
    description: 'Техническая европейская трасса. Место проведения King of Europe.',
    founded: 2008,
    events: ['King of Europe', 'Austrian Drift Challenge'],
    difficulty: 'Высокая',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
    famous: false,
  },
  {
    id: 7,
    name: 'Tsukuba Circuit',
    location: 'Ibaraki, Япония',
    country: 'Япония',
    region: 'Азия',
    coordinates: { x: 76, y: 36 },
    description: 'Культовая короткая трасса. Место рекордных заездов Time Attack и дрифт-баттлов.',
    founded: 1970,
    events: ['D1 Grand Prix', 'Time Attack'],
    difficulty: 'Средняя',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
    famous: true,
  },
  {
    id: 8,
    name: 'Atlanta Motor Speedway',
    location: 'Georgia, США',
    country: 'США',
    region: 'Северная Америка',
    coordinates: { x: 18, y: 42 },
    description: 'Овальная NASCAR трасса. Высокоскоростной дрифт на супер-спидвее.',
    founded: 2006,
    events: ['Formula Drift'],
    difficulty: 'Средняя',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    famous: false,
  },
];

const regions = ['Все регионы', 'Азия', 'Европа', 'Северная Америка'];

export default function DriftTracksMap() {
  const [selectedRegion, setSelectedRegion] = useState('Все регионы');
  const [selectedTrack, setSelectedTrack] = useState<typeof driftTracks[0] | null>(null);

  const filteredTracks = selectedRegion === 'Все регионы'
    ? driftTracks
    : driftTracks.filter(track => track.region === selectedRegion);

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <h2 className="text-4xl font-oswald font-bold mb-4 drift-text-gradient">
          КАРТА ДРИФТ-ТРАСС МИРА
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Легендарные трассы, где творится история дрифта
        </p>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <Badge
              key={region}
              variant={selectedRegion === region ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedRegion === region ? 'drift-gradient' : 'hover:border-primary'
              }`}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <div className="relative w-full h-[500px] bg-gradient-to-br from-background via-primary/5 to-accent/5 rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 60">
              <path d="M 0,30 Q 20,10 40,30 T 80,30 L 100,30" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M 0,40 Q 25,20 50,40 T 100,40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          
          {filteredTracks.map((track) => (
            <button
              key={track.id}
              className="absolute group"
              style={{ 
                left: `${track.coordinates.x}%`, 
                top: `${track.coordinates.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedTrack(track)}
            >
              <div className="relative">
                <div className={`w-4 h-4 rounded-full ${
                  track.famous ? 'drift-gradient' : 'bg-secondary'
                } animate-pulse`} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded text-xs font-oswald whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {track.name}
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full drift-gradient" />
            <span className="text-muted-foreground">Легендарные трассы</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-muted-foreground">Основные трассы</span>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track, index) => (
          <Card
            key={track.id}
            className="overflow-hidden hover:scale-[1.02] transition-all bg-card/50 backdrop-blur border-border/50 group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedTrack(track)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={track.image}
                alt={track.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {track.famous && (
                <Badge className="absolute top-4 right-4 drift-gradient font-oswald">
                  <Icon name="Star" size={14} className="mr-1" />
                  ЛЕГЕНДА
                </Badge>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-oswald font-bold text-white mb-1">
                  {track.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Icon name="MapPin" size={14} />
                  <span>{track.location}</span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {track.description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <Badge variant="outline" className="border-primary/30">
                  {track.difficulty}
                </Badge>
                <span className="text-muted-foreground">С {track.founded}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedTrack} onOpenChange={() => setSelectedTrack(null)}>
        <DialogContent className="max-w-3xl">
          {selectedTrack && (
            <>
              <DialogHeader>
                <DialogTitle className="font-oswald text-3xl drift-text-gradient flex items-center gap-3">
                  {selectedTrack.name}
                  {selectedTrack.famous && (
                    <Badge className="drift-gradient">
                      <Icon name="Star" size={14} className="mr-1" />
                      ЛЕГЕНДА
                    </Badge>
                  )}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="font-medium">{selectedTrack.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Globe" size={16} className="text-accent" />
                      <span>{selectedTrack.region}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" size={16} className="text-secondary" />
                      <span>Основана в {selectedTrack.founded}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Gauge" size={16} className="text-muted-foreground" />
                      <span>Сложность: {selectedTrack.difficulty}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedTrack.description}
                </p>

                <div>
                  <p className="text-sm font-oswald text-muted-foreground mb-2">СОРЕВНОВАНИЯ:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrack.events.map((event) => (
                      <Badge key={event} variant="outline" className="border-primary/30">
                        <Icon name="Trophy" size={12} className="mr-1" />
                        {event}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full drift-gradient hover:opacity-90 font-oswald">
                  <Icon name="ExternalLink" size={18} className="mr-2" />
                  ПОДРОБНЕЕ О ТРАССЕ
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
