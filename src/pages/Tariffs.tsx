import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Tariffs = () => {
  const tariffs = [
    {
      name: 'Стандарт',
      price: '75 000',
      description: 'Базовый уход и комфортное проживание',
      color: 'bg-secondary',
      features: [
        'Общая комната на 2-3 человека',
        'Круглосуточный уход медсестры',
        '5-разовое питание',
        'Гигиенические процедуры',
        'Контроль приема лекарств',
        'Прогулки на свежем воздухе',
        'Развлекательные мероприятия',
        'Уборка помещений',
      ],
      popular: false,
    },
    {
      name: 'Комфорт',
      price: '110 000',
      description: 'Расширенный уход с дополнительными услугами',
      color: 'bg-accent/20',
      features: [
        'Комната на 2 человека',
        'Все услуги тарифа "Стандарт"',
        'Консультации узких специалистов',
        'Индивидуальное меню',
        'ЛФК и реабилитация',
        'Косметологические процедуры',
        'Библиотека и кинозал',
        'Wi-Fi в номере',
      ],
      popular: true,
    },
    {
      name: 'Премиум',
      price: '180 000',
      description: 'Максимальный комфорт и персональный подход',
      color: 'bg-primary/10',
      features: [
        'Отдельная комната люкс',
        'Все услуги тарифа "Комфорт"',
        'Персональная медсестра',
        'Индивидуальная программа реабилитации',
        'Массаж и физиотерапия',
        'Кондиционер и ТВ',
        'Отдельная ванная комната',
        'Парикмахерские услуги',
        'Транспортное сопровождение',
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    { name: 'Сопровождение на процедуры', price: '2 000' },
    { name: 'Индивидуальное занятие с психологом', price: '3 500' },
    { name: 'Массаж (1 сеанс)', price: '2 500' },
    { name: 'Парикмахерские услуги', price: '1 500' },
    { name: 'Маникюр/педикюр', price: '2 000' },
    { name: 'Стирка личных вещей', price: '500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Icon name="Flower2" size={32} className="text-primary" />
              <span className="text-2xl font-serif font-bold text-primary">Ландыш</span>
            </a>
            <Button onClick={() => window.location.href = '/'} variant="outline">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              На главную
            </Button>
          </div>
        </nav>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Прозрачные цены</Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Тарифы и пакеты услуг</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный тариф для комфортного проживания и профессионального ухода
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {tariffs.map((tariff, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all hover:-translate-y-2 ${
                  tariff.popular ? 'ring-2 ring-accent scale-105' : ''
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                <CardHeader className={`${tariff.color} rounded-t-xl pb-8`}>
                  <CardTitle className="font-serif text-3xl text-center mb-2">{tariff.name}</CardTitle>
                  <CardDescription className="text-center text-base">{tariff.description}</CardDescription>
                  <div className="text-center mt-6">
                    <span className="text-5xl font-bold text-primary">{tariff.price}</span>
                    <span className="text-muted-foreground ml-2">₽/мес</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4 mb-8">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={14} className="text-accent-foreground" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    size="lg"
                    variant={tariff.popular ? 'default' : 'outline'}
                    onClick={() => window.location.href = '/#contacts'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-16" />

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Дополнительные услуги</h2>
              <p className="text-lg text-muted-foreground">
                Расширьте возможности выбранного тарифа индивидуальными услугами
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {additionalServices.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                          <Icon name="Plus" size={20} className="text-accent" />
                          <span className="text-foreground font-medium">{service.name}</span>
                        </div>
                        <span className="text-primary font-bold text-lg">{service.price} ₽</span>
                      </div>
                      {index < additionalServices.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Info" size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">Важная информация</h3>
              <div className="text-left space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Icon name="Circle" size={8} className="mt-2 flex-shrink-0" />
                  <span>Стоимость указана за 1 месяц проживания (30 дней)</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Circle" size={8} className="mt-2 flex-shrink-0" />
                  <span>Оплата производится до 5 числа текущего месяца</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Circle" size={8} className="mt-2 flex-shrink-0" />
                  <span>Возможна оплата от 1 дня. Стоимость рассчитывается индивидуально</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Circle" size={8} className="mt-2 flex-shrink-0" />
                  <span>При оплате за 3 месяца вперед — скидка 5%</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Circle" size={8} className="mt-2 flex-shrink-0" />
                  <span>При оплате за 6 месяцев вперед — скидка 10%</span>
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" onClick={() => window.location.href = '/#contacts'}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Flower2" size={28} className="text-accent" />
              <span className="text-2xl font-serif font-bold">Ландыш</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Гериатрический центр премиум-класса
            </p>
            <div className="text-primary-foreground/60">
              <p>+7 (495) 123-45-67 • info@landysh-center.ru</p>
              <p className="mt-2">&copy; 2024 Гериатрический центр "Ландыш". Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tariffs;
