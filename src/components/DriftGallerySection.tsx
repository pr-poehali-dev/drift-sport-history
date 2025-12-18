import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryMoments = [
  {
    id: 1,
    title: 'Кэйити Цутия на легендарной AE86',
    year: '1987',
    location: 'Usui Pass, Япония',
    description: 'Первые легендарные заезды "Отца дрифта" на горных серпантинах Японии',
    category: 'Легенды',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  },
  {
    id: 2,
    title: 'D1 Grand Prix - Финал 2005',
    year: '2005',
    location: 'Одайба, Токио',
    description: 'Эпичная битва Танигучи и Кумакубо в финале первого сезона D1GP',
    category: 'Соревнования',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  },
  {
    id: 3,
    title: 'Formula Drift Long Beach',
    year: '2019',
    location: 'Long Beach, США',
    description: 'Вон Гиттин на Mustang RTR - рекордный угол заноса 65 градусов',
    category: 'Рекорды',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
  },
  {
    id: 4,
    title: 'Drift Masters European Championship',
    year: '2023',
    location: 'Рига, Латвия',
    description: 'Фредрик Осберг берет третий титул "Король Европы"',
    category: 'Чемпионаты',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-DA3AD6b67376?w=800&q=80',
  },
  {
    id: 5,
    title: 'Сидней Дрифт Про',
    year: '2022',
    location: 'Сидней, Австралия',
    description: 'Джеймс Дин демонстрирует идеальный тандем-дрифт',
    category: 'Мастерство',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  },
  {
    id: 6,
    title: 'Ebisu Circuit Matsuri',
    year: '2021',
    location: 'Эбису, Япония',
    description: 'Культовый фестиваль дрифта - 300+ машин на легендарной трассе',
    category: 'Фестивали',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
  },
];

const categories = ['Все', 'Легенды', 'Соревнования', 'Рекорды', 'Чемпионаты', 'Мастерство', 'Фестивали'];

export default function DriftGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedImage, setSelectedImage] = useState<typeof galleryMoments[0] | null>(null);

  const filteredMoments = selectedCategory === 'Все' 
    ? galleryMoments 
    : galleryMoments.filter(moment => moment.category === selectedCategory);

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <h2 className="text-4xl font-oswald font-bold mb-4 drift-text-gradient">
          ГАЛЕРЕЯ ЛЕГЕНДАРНЫХ МОМЕНТОВ
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Культовые моменты, которые вошли в историю дрифта
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedCategory === category ? 'drift-gradient' : 'hover:border-primary'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMoments.map((moment, index) => (
          <Card
            key={moment.id}
            className="overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 cursor-pointer group"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(moment)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={moment.imageUrl}
                alt={moment.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-white">
                  <Icon name="Eye" size={20} />
                  <span className="text-sm font-oswald">СМОТРЕТЬ</span>
                </div>
              </div>
              <Badge className="absolute top-4 right-4 drift-gradient font-oswald">
                {moment.year}
              </Badge>
            </div>
            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl font-oswald font-bold mb-1 group-hover:drift-text-gradient transition-all">
                  {moment.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Icon name="MapPin" size={14} />
                  <span>{moment.location}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {moment.description}
              </p>
              <Badge variant="outline" className="border-primary/30">
                {moment.category}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                <Badge className="drift-gradient font-oswald mb-3">
                  {selectedImage.year}
                </Badge>
                <h3 className="text-3xl font-oswald font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center gap-2 text-white/80 mb-3">
                  <Icon name="MapPin" size={16} />
                  <span>{selectedImage.location}</span>
                </div>
                <p className="text-white/90 text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
