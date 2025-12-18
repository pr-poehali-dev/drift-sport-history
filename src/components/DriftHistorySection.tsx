import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

export default function DriftHistorySection() {
  return (
    <div className="space-y-8 animate-fade-in">
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
    </div>
  );
}
