import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const driftDrivers = [
  {
    id: 1,
    name: 'Кэйити Цутия',
    nickname: 'Drift King',
    country: 'Япония',
    car: 'Toyota AE86 Trueno',
    achievements: ['Основатель дрифта как спорта', 'Легенда D1 Grand Prix', 'Mentor для целого поколения'],
    bio: 'Кэйити Цутия - легендарная личность в мире дрифта, известный как "Отец дрифта". Именно он превратил дрифт из уличной техники в настоящее искусство и спорт.',
    videoId: 'N2IWxqvsSY8',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80',
  },
  {
    id: 2,
    name: 'Нобуширо Танигучи',
    nickname: 'NOB',
    country: 'Япония',
    car: 'Mazda RX-7 FD3S',
    achievements: ['Чемпион D1 Grand Prix', 'Король роторных двигателей', 'Record Holder Tsukuba'],
    bio: 'Танигучи - мастер роторных Mazda. Его стиль отличается плавностью и техничностью. Один из самых титулованных пилотов D1 Grand Prix.',
    videoId: 'gNdnVVHfseA',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 3,
    name: 'Вон Гиттин',
    nickname: 'Gittin Jr.',
    country: 'США',
    car: 'Ford Mustang RTR',
    achievements: ['Чемпион Formula Drift', 'Звезда Gymkhana', '5x Formula Drift Champion'],
    bio: 'Вон Гиттин принес американский стиль в дрифт - мощные V8, агрессивная манера вождения. Создатель легендарной серии Mustang RTR.',
    videoId: 'LuDN2bCIyus',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    id: 4,
    name: 'Фредрик Осберг',
    nickname: 'The King of Europe',
    country: 'Норвегия',
    car: 'BMW E92 M3',
    achievements: ['3x King of Europe', 'Drift Masters Champion', 'Европейская легенда'],
    bio: 'Норвежский пилот, доминирующий в европейском дрифте. Известен своей точностью и агрессивными углами.',
    videoId: '5qanlirrRWs',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
  {
    id: 5,
    name: 'Джеймс Дин',
    nickname: 'JDeezal',
    country: 'Новая Зеландия',
    car: 'Nissan Silvia S15',
    achievements: ['Formula Drift Champion', 'D1NZ Champion', 'Red Bull Drifter'],
    bio: 'Новозеландский виртуоз на Silvia S15. Его стиль сочетает японскую точность с западной агрессией.',
    videoId: 'ExN76hAiiFI',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
];

export default function DriftDriversSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
                  <img 
                    src={driver.photo} 
                    alt={driver.name}
                    className="w-full h-full object-cover"
                  />
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

              <Button 
                className="w-full drift-gradient hover:opacity-90 font-oswald"
                onClick={() => setSelectedVideo(driver.videoId)}
              >
                <Icon name="Play" size={18} className="mr-2" />
                СМОТРЕТЬ ГОНКИ
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
                title="Driver Video"
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