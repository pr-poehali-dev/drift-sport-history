import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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

export default function DriftDriversSection() {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
}
