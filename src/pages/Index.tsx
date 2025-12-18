import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    video: 'https://www.youtube.com/watch?v=example1',
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
    video: 'https://www.youtube.com/watch?v=example2',
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
    video: 'https://www.youtube.com/watch?v=example3',
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
    video: 'https://www.youtube.com/watch?v=example4',
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
    video: 'https://www.youtube.com/watch?v=example5',
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
    video: 'https://www.youtube.com/watch?v=example6',
    image: 'https://cdn.poehali.dev/projects/d9ab8f0d-5f02-49e5-804b-ec1e77e58cf3/bucket/mustang-rtr.jpg',
    description: 'Американский монстр от Вона Гиттина. Огромная мощность V8 и агрессивный стиль дрифта.',
  },
];

const driftHistory = [
  {
    year: '1970-е',
    era: 'Зарождение',
    title: 'Корни в горах Японии',
    description: 'Дрифт зародился на горных дорогах Японии. Уличные гонщики практиковали технику контролируемого заноса для прохождения крутых поворотов на высокой скорости.',
  },
  {
    year: '1977',
    era: 'Первопроходцы',
    title: 'Кэйити Цутия - "Отец дрифта"',
    description: 'Кэйити Цутия на своей AE86 начал развивать дрифт как искусство. Его техника и стиль вождения стали основой современного дрифта.',
  },
  {
    year: '1988',
    era: 'Медиа',
    title: 'Видео "Pluspy"',
    description: 'Выход культового видео "Pluspy", где Цутия демонстрирует дрифт на AE86. Видео разошлось по всей Японии и вдохновило тысячи гонщиков.',
  },
  {
    year: '2001',
    era: 'Профессионализация',
    title: 'D1 Grand Prix',
    description: 'Запуск первого профессионального чемпионата по дрифту - D1 Grand Prix в Японии. Дрифт становится официальным спортом.',
  },
  {
    year: '2004',
    era: 'Мировая экспансия',
    title: 'Formula Drift USA',
    description: 'Старт Formula Drift в США. Дрифт выходит за пределы Японии и завоевывает Америку и Европу.',
  },
  {
    year: '2010-е',
    era: 'Золотая эра',
    title: 'Глобальное признание',
    description: 'Дрифт становится глобальным явлением. Чемпионаты проводятся по всему миру, появляются звезды международного уровня.',
  },
  {
    year: '2020-е',
    era: 'Современность',
    title: 'Электрификация и технологии',
    description: 'Появление электрических дрифт-каров, продвинутая телеметрия, прямые трансляции, миллионы фанатов по всему миру.',
  },
];

const driftDrivers = [
  {
    id: 1,
    name: 'Кэйити Цутия',
    nickname: 'Drift King',
    country: 'Япония',
    car: 'Toyota AE86 Trueno',
    achievements: ['Основатель дрифта как спорта', 'Легенда D1 Grand Prix', 'Mentor для целого поколения'],
    bio: 'Кэйити Цутия - легендарная личность в мире дрифта, известный как "Отец дрифта". Именно он превратил дрифт из уличной техники в настоящее искусство и спорт.',
  },
  {
    id: 2,
    name: 'Нобуширо Танигучи',
    nickname: 'NOB',
    country: 'Япония',
    car: 'Mazda RX-7 FD3S',
    achievements: ['Чемпион D1 Grand Prix', 'Король роторных двигателей', 'Record Holder Tsukuba'],
    bio: 'Танигучи - мастер роторных Mazda. Его стиль отличается плавностью и техничностью. Один из самых титулованных пилотов D1 Grand Prix.',
  },
  {
    id: 3,
    name: 'Вон Гиттин',
    nickname: 'Gittin Jr.',
    country: 'США',
    car: 'Ford Mustang RTR',
    achievements: ['Чемпион Formula Drift', 'Звезда Gymkhana', '5x Formula Drift Champion'],
    bio: 'Вон Гиттин принес американский стиль в дрифт - мощные V8, агрессивная манера вождения. Создатель легендарной серии Mustang RTR.',
  },
  {
    id: 4,
    name: 'Фредрик Осберг',
    nickname: 'The King of Europe',
    country: 'Норвегия',
    car: 'BMW E92 M3',
    achievements: ['3x King of Europe', 'Drift Masters Champion', 'Европейская легенда'],
    bio: 'Норвежский пилот, доминирующий в европейском дрифте. Известен своей точностью и агрессивными углами.',
  },
  {
    id: 5,
    name: 'Джеймс Дин',
    nickname: 'JDeezal',
    country: 'Новая Зеландия',
    car: 'Nissan Silvia S15',
    achievements: ['Formula Drift Champion', 'D1NZ Champion', 'Red Bull Drifter'],
    bio: 'Новозеландский виртуоз на Silvia S15. Его стиль сочетает японскую точность с западной агрессией.',
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [competitionFilter, setCompetitionFilter] = useState('all');

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
    <div className="min-h-screen bg-background tire-marks">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="drift-gradient rounded-lg p-2">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-oswald font-bold drift-text-gradient">
                  DRIFT LEGENDS
                </h1>
                <p className="text-sm text-muted-foreground">История и культура дрифта</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-oswald font-bold mb-6 drift-text-gradient">
            ДРИФТ СПОРТ
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Искусство контролируемого заноса. От горных дорог Японии до мировых чемпионатов.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="px-6 py-3 text-lg border-primary/50">
              <Icon name="Gauge" size={20} className="mr-2" />
              Скорость
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg border-accent/50">
              <Icon name="Flame" size={20} className="mr-2" />
              Адреналин
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg border-secondary/50">
              <Icon name="Trophy" size={20} className="mr-2" />
              Мастерство
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="cars" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur">
            <TabsTrigger value="cars" className="text-lg font-oswald data-[state=active]:drift-gradient">
              <Icon name="Car" size={20} className="mr-2" />
              АВТОМОБИЛИ
            </TabsTrigger>
            <TabsTrigger value="history" className="text-lg font-oswald data-[state=active]:drift-gradient">
              <Icon name="Clock" size={20} className="mr-2" />
              ИСТОРИЯ
            </TabsTrigger>
            <TabsTrigger value="drivers" className="text-lg font-oswald data-[state=active]:drift-gradient">
              <Icon name="Users" size={20} className="mr-2" />
              ПИЛОТЫ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cars" className="space-y-6 animate-fade-in">
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

                    <Button className="w-full drift-gradient hover:opacity-90 font-oswald">
                      <Icon name="Play" size={18} className="mr-2" />
                      СМОТРЕТЬ ВИДЕО
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-8 animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h2 className="text-4xl font-oswald font-bold mb-4 drift-text-gradient">
                ЭВОЛЮЦИЯ ДРИФТА
              </h2>
              <p className="text-lg text-muted-foreground">
                От подпольных гонок на горных серпантинах до признанного во всём мире автоспорта
              </p>
            </Card>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 drift-gradient opacity-30" />
              
              <div className="space-y-8">
                {driftHistory.map((period, index) => (
                  <Card 
                    key={period.year}
                    className="ml-16 relative hover:scale-[1.02] transition-all bg-card/50 backdrop-blur border-border/50"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="absolute -left-12 top-8 w-8 h-8 rounded-full drift-gradient flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-background" />
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4">
                        <Badge className="drift-gradient font-oswald text-lg px-4 py-1">
                          {period.year}
                        </Badge>
                        <Badge variant="outline" className="font-oswald">
                          {period.era}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-oswald font-bold">
                        {period.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {period.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6 animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h2 className="text-4xl font-oswald font-bold mb-4 drift-text-gradient">
                ЛЕГЕНДЫ ДРИФТА
              </h2>
              <p className="text-lg text-muted-foreground">
                Пилоты, которые создали историю и вдохновили миллионы
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {driftDrivers.map((driver, index) => (
                <Card 
                  key={driver.id}
                  className="overflow-hidden hover:scale-[1.02] transition-all bg-card/50 backdrop-blur border-border/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-full drift-gradient flex items-center justify-center flex-shrink-0">
                        <Icon name="UserCircle" size={48} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-oswald font-bold group-hover:drift-text-gradient transition-all">
                          {driver.name}
                        </h3>
                        <p className="text-primary font-medium">"{driver.nickname}"</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Icon name="MapPin" size={14} />
                          {driver.country}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {driver.bio}
                    </p>

                    <div className="flex items-center gap-2 text-sm p-3 bg-background/50 rounded-lg">
                      <Icon name="Car" size={16} className="text-primary" />
                      <span className="font-medium">{driver.car}</span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-oswald text-muted-foreground">ДОСТИЖЕНИЯ:</p>
                      <div className="space-y-1">
                        {driver.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2 text-sm">
                            <Icon name="Trophy" size={14} className="text-accent" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full drift-gradient hover:opacity-90 font-oswald">
                      <Icon name="Play" size={18} className="mr-2" />
                      СМОТРЕТЬ ГОНКИ
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="border-t border-border/50 mt-20 py-12 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="drift-gradient rounded-lg p-2">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-oswald font-bold drift-text-gradient">
              DRIFT LEGENDS
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Портал о культуре и истории дрифта
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" className="hover:drift-gradient hover:border-transparent">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:drift-gradient hover:border-transparent">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:drift-gradient hover:border-transparent">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
