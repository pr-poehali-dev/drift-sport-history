import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const upcomingEvents = [
  {
    id: 1,
    name: 'Formula Drift Round 1',
    date: '2025-04-05',
    dateFormatted: '5 апреля 2025',
    location: 'Long Beach, California',
    country: 'США',
    series: 'Formula Drift',
    status: 'Скоро',
    description: 'Открытие сезона Formula Drift 2025 на легендарной городской трассе',
    ticketsAvailable: true,
  },
  {
    id: 2,
    name: 'Drift Masters European Championship Round 1',
    date: '2025-05-10',
    dateFormatted: '10 мая 2025',
    location: 'Рига, Латвия',
    country: 'Латвия',
    series: 'Drift Masters',
    status: 'Регистрация открыта',
    description: 'Первый этап европейского чемпионата по дрифту',
    ticketsAvailable: true,
  },
  {
    id: 3,
    name: 'D1 Grand Prix Series Round 2',
    date: '2025-05-24',
    dateFormatted: '24 мая 2025',
    location: 'Эбису Circuit, Fukushima',
    country: 'Япония',
    series: 'D1 Grand Prix',
    status: 'Билеты в продаже',
    description: 'Легендарная трасса Эбису принимает второй раунд D1GP',
    ticketsAvailable: true,
  },
  {
    id: 4,
    name: 'Formula Drift Round 3',
    date: '2025-06-14',
    dateFormatted: '14 июня 2025',
    location: 'Atlanta Motor Speedway',
    country: 'США',
    series: 'Formula Drift',
    status: 'Анонсировано',
    description: 'Высокоскоростной дрифт на овальной трассе NASCAR',
    ticketsAvailable: false,
  },
  {
    id: 5,
    name: 'King of Europe Drift Pro Championship',
    date: '2025-07-19',
    dateFormatted: '19 июля 2025',
    location: 'Greinbach, Austria',
    country: 'Австрия',
    series: 'King of Europe',
    status: 'Предварительная регистрация',
    description: 'Битва лучших европейских дрифтеров за титул Короля Европы',
    ticketsAvailable: true,
  },
  {
    id: 6,
    name: 'Drift Masters GP Riga Finals',
    date: '2025-09-20',
    dateFormatted: '20 сентября 2025',
    location: 'Biķernieki, Рига',
    country: 'Латвия',
    series: 'Drift Masters',
    status: 'Анонсировано',
    description: 'Финальный этап сезона Drift Masters 2025',
    ticketsAvailable: false,
  },
];

const seriesColors: Record<string, string> = {
  'Formula Drift': 'border-red-500/50 text-red-500',
  'Drift Masters': 'border-blue-500/50 text-blue-500',
  'D1 Grand Prix': 'border-yellow-500/50 text-yellow-500',
  'King of Europe': 'border-purple-500/50 text-purple-500',
};

export default function DriftEventsSection() {
  const getDaysUntil = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-4xl font-oswald font-bold mb-4 drift-text-gradient">
              КАЛЕНДАРЬ СОРЕВНОВАНИЙ 2025
            </h2>
            <p className="text-lg text-muted-foreground">
              Предстоящие турниры и чемпионаты мирового уровня
            </p>
          </div>
          <Badge className="drift-gradient font-oswald text-lg px-4 py-2">
            {upcomingEvents.length} СОБЫТИЙ
          </Badge>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {upcomingEvents.map((event, index) => {
          const daysUntil = getDaysUntil(event.date);
          const isUpcoming = daysUntil > 0;

          return (
            <Card
              key={event.id}
              className="overflow-hidden hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <Badge 
                      variant="outline" 
                      className={`${seriesColors[event.series]} font-oswald`}
                    >
                      {event.series}
                    </Badge>
                    <h3 className="text-2xl font-oswald font-bold group-hover:drift-text-gradient transition-all">
                      {event.name}
                    </h3>
                  </div>
                  {isUpcoming && (
                    <div className="text-right">
                      <div className="text-3xl font-oswald font-bold drift-text-gradient">
                        {daysUntil}
                      </div>
                      <div className="text-xs text-muted-foreground">ДНЕЙ</div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="font-medium">{event.dateFormatted}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span>{event.location}, {event.country}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Info" size={16} className="text-secondary" />
                    <Badge variant="secondary" className="text-xs">
                      {event.status}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 drift-gradient hover:opacity-90 font-oswald"
                    disabled={!event.ticketsAvailable}
                  >
                    <Icon name="Ticket" size={18} className="mr-2" />
                    {event.ticketsAvailable ? 'КУПИТЬ БИЛЕТЫ' : 'СКОРО В ПРОДАЖЕ'}
                  </Button>
                  <Button variant="outline" size="icon" className="hover:border-primary">
                    <Icon name="Bell" size={18} />
                  </Button>
                </div>
              </div>

              <div className="h-2 drift-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur border-primary/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full drift-gradient flex items-center justify-center flex-shrink-0">
            <Icon name="Bell" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-oswald font-bold text-lg mb-1">
              Не пропусти ни одного события!
            </h3>
            <p className="text-sm text-muted-foreground">
              Подпишись на уведомления и получай информацию о новых турнирах
            </p>
          </div>
          <Button className="drift-gradient hover:opacity-90 font-oswald">
            <Icon name="Mail" size={18} className="mr-2" />
            ПОДПИСАТЬСЯ
          </Button>
        </div>
      </Card>
    </div>
  );
}
