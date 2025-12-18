import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import DriftCarsSection from '@/components/DriftCarsSection';
import DriftHistorySection from '@/components/DriftHistorySection';
import DriftDriversSection from '@/components/DriftDriversSection';

export default function Index() {
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

          <TabsContent value="cars">
            <DriftCarsSection />
          </TabsContent>

          <TabsContent value="history">
            <DriftHistorySection />
          </TabsContent>

          <TabsContent value="drivers">
            <DriftDriversSection />
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
