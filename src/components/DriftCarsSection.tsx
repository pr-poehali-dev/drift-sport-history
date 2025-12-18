import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const driftCars = [
  {
    id: 1,
    name: 'Nissan Silvia S15',
    year: 1999,
    driver: 'Кэйити Цутия',
    engine: 'SR20DET 2.0L Turbo',
    power: '250-400 л.с.',
    drivetrain: 'Задний привод',
    weight: '1240 кг',
    competitions: ['D1 Grand Prix', 'Formula Drift'],
    videoId: 'pL16uABjFCg',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/nissan-s15.jpg',
    description: 'Легендарная S15 - последнее поколение Silvia, идеальная платформа для дрифта благодаря балансу и управляемости.',
  },
  {
    id: 2,
    name: 'Toyota AE86 Trueno',
    year: 1983,
    driver: 'Кэйити Цутия',
    engine: '4A-GE 1.6L',
    power: '130 л.с. (stock)',
    drivetrain: 'Задний привод',
    weight: '925 кг',
    competitions: ['D1 Grand Prix', 'Ikaten'],
    videoId: 'N2IWxqvsSY8',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/ae86.jpg',
    description: 'Культовая модель, прославленная Кэйити Цутия - "Отцом дрифта". Легкая, маневренная, идеально сбалансированная.',
  },
  {
    id: 3,
    name: 'Mazda RX-7 FD3S',
    year: 1992,
    driver: 'Нобуширо Танигучи',
    engine: '13B-REW Twin Turbo Rotary',
    power: '255-500+ л.с.',
    drivetrain: 'Задний привод',
    weight: '1280 кг',
    competitions: ['D1 Grand Prix', 'Formula Drift'],
    videoId: 'gNdnVVHfseA',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/rx7-fd.jpg',
    description: 'RX-7 с роторным двигателем - икона 90-х. Легендарный "Drift King" Танигучи сделал её символом дрифта.',
  },
  {
    id: 4,
    name: 'Nissan Skyline R34 GT-R',
    year: 1999,
    driver: 'Майкл Краметц',
    engine: 'RB26DETT 2.6L Twin Turbo',
    power: '280-1000+ л.с.',
    drivetrain: 'Полный привод (модифицированный на RWD)',
    weight: '1560 кг',
    competitions: ['Formula Drift', 'King of Europe'],
    videoId: 'fHOek_FXPLo',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/r34-gtr.jpg',
    description: 'R34 GT-R - легенда JDM сцены. Невероятная мощность и потенциал для тюнинга.',
  },
  {
    id: 5,
    name: 'BMW E46 M3',
    year: 2000,
    driver: 'Вон Гиттин',
    engine: 'S54 3.2L I6',
    power: '343-600+ л.с.',
    drivetrain: 'Задний привод',
    weight: '1495 кг',
    competitions: ['Formula Drift', 'Drift Masters European Championship'],
    videoId: 'nLwML2PagbY',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/e46-m3.jpg',
    description: 'E46 M3 - европейский ответ японским дрифт-карам. Мощный двигатель и превосходная управляемость.',
  },
  {
    id: 6,
    name: 'Ford Mustang RTR',
    year: 2015,
    driver: 'Вон Гиттин',
    engine: '5.0L V8',
    power: '900+ л.с.',
    drivetrain: 'Задний привод',
    weight: '1700 кг',
    competitions: ['Formula Drift', 'Gymkhana'],
    videoId: 'LuDN2bCIyus',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/mustang-rtr.jpg',
    description: 'Американский монстр от Вона Гиттина. Огромная мощность V8 и агрессивный стиль дрифта.',
  },
];

export default function DriftCarsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [competitionFilter, setCompetitionFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredCars = driftCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.engine.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = yearFilter === 'all' || 
                       (yearFilter === '1980s' && car.year >= 1980 && car.year < 1990) ||
                       (yearFilter === '1990s' && car.year >= 1990 && car.year < 2000) ||
                       (yearFilter === '2000s' && car.year >= 2000 && car.year < 2010) ||
                       (yearFilter === '2010s' && car.year >= 2010 && car.year < 2020) ||
                       (yearFilter === '2020s' && car.year >= 2020);
    
    const matchesCompetition = competitionFilter === 'all' || 
                              car.competitions.includes(competitionFilter);
    
    return matchesSearch && matchesYear && matchesCompetition;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по модели, пилоту или двигателю..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background/50"
              />
            </div>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-full md:w-[200px] bg-background/50">
                <SelectValue placeholder="Год выпуска" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все годы</SelectItem>
                <SelectItem value="1980s">1980-е</SelectItem>
                <SelectItem value="1990s">1990-е</SelectItem>
                <SelectItem value="2000s">2000-е</SelectItem>
                <SelectItem value="2010s">2010-е</SelectItem>
                <SelectItem value="2020s">2020-е</SelectItem>
              </SelectContent>
            </Select>
            <Select value={competitionFilter} onValueChange={setCompetitionFilter}>
              <SelectTrigger className="w-full md:w-[220px] bg-background/50">
                <SelectValue placeholder="Соревнования" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все соревнования</SelectItem>
                <SelectItem value="D1 Grand Prix">D1 Grand Prix</SelectItem>
                <SelectItem value="Formula Drift">Formula Drift</SelectItem>
                <SelectItem value="King of Europe">King of Europe</SelectItem>
                <SelectItem value="Drift Masters European Championship">Drift Masters</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">
              Найдено: {filteredCars.length}
            </Badge>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car, index) => (
          <Card 
            key={car.id} 
            className="overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Car" size={64} className="text-muted-foreground/30" />
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="drift-gradient font-oswald">{car.year}</Badge>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-oswald font-bold mb-2 group-hover:drift-text-gradient transition-all">
                  {car.name}
                </h3>
                <p className="text-sm text-muted-foreground">{car.description}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="User" size={16} className="text-primary" />
                  <span className="font-medium">{car.driver}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Cog" size={16} className="text-accent" />
                  <span>{car.engine}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Zap" size={16} className="text-secondary" />
                  <span>{car.power}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Weight" size={16} className="text-muted-foreground" />
                  <span>{car.weight}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {car.competitions.map((comp) => (
                  <Badge key={comp} variant="outline" className="text-xs border-primary/30">
                    {comp}
                  </Badge>
                ))}
              </div>

              <Button 
                className="w-full drift-gradient hover:opacity-90 font-oswald"
                onClick={() => setSelectedVideo(car.videoId)}
              >
                <Icon name="Play" size={18} className="mr-2" />
                СМОТРЕТЬ ВИДЕО
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-oswald text-2xl drift-text-gradient">ДРИФТ ВИДЕО</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Drift Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}