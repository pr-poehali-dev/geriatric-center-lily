import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { icon: 'Heart', title: 'Круглосуточный уход', description: 'Профессиональная забота 24/7' },
    { icon: 'Stethoscope', title: 'Медицинская помощь', description: 'Квалифицированные врачи и медсестры' },
    { icon: 'Utensils', title: 'Сбалансированное питание', description: 'Индивидуальное меню от диетолога' },
    { icon: 'Activity', title: 'Реабилитация', description: 'Программы восстановления и ЛФК' },
    { icon: 'Home', title: 'Комфортное проживание', description: 'Уютные номера премиум-класса' },
    { icon: 'Users', title: 'Социальная жизнь', description: 'Досуг, мероприятия, общение' },
  ];

  const medicalServices = [
    'Консультации терапевта и узких специалистов',
    'Контроль приема лекарственных препаратов',
    'Измерение жизненных показателей',
    'Процедурный кабинет',
    'Лабораторная диагностика',
    'Вызов скорой помощи при необходимости',
  ];

  const testimonials = [
    {
      name: 'Елена Викторовна',
      text: 'Спасибо огромное всему коллективу "Ландыш"! Мама чувствует себя как дома, всегда окружена заботой и вниманием.',
      rating: 5,
    },
    {
      name: 'Александр Петрович',
      text: 'Профессиональный подход, чистота, вежливый персонал. Отец доволен условиями проживания и медицинским обслуживанием.',
      rating: 5,
    },
    {
      name: 'Мария Сергеевна',
      text: 'Превосходный центр! Качественное питание, интересный досуг, внимательное отношение. Рекомендую от всей души.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" size={32} className="text-primary" />
              <span className="text-2xl font-serif font-bold text-primary">Ландыш</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'about', 'services', 'medical', 'gallery', 'testimonials', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О центре'}
                  {section === 'services' && 'Услуги'}
                  {section === 'medical' && 'Медицина'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться с нами
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Медицинская лицензия</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Гериатрический центр <span className="text-accent">Ландыш</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Премиум пансионат для пожилых людей с круглосуточным медицинским уходом, 
                профессиональной реабилитацией и комфортными условиями проживания
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                  Записаться на экскурсию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/a2fec453-5c33-47d0-bd2b-321b46f3a36c.jpg" 
                alt="Интерьер центра Ландыш"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">О центре</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Гериатрический центр "Ландыш" — это современное учреждение премиум-класса для комфортного 
              проживания пожилых людей. Мы создали пространство, где сочетаются домашний уют, 
              профессиональный медицинский уход и насыщенная социальная жизнь.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-serif">15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Работаем в сфере гериатрии с 2009 года</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-serif">50+ сотрудников</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Квалифицированный персонал с медицинским образованием</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-serif">Лицензия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Полный пакет медицинских лицензий и сертификатов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к уходу за пожилыми людьми
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-accent" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/tariffs'}>
              <Icon name="FileText" size={20} className="mr-2" />
              Посмотреть тарифы
            </Button>
          </div>
        </div>
      </section>

      <section id="medical" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/83c2ad6c-4ca4-465f-baa7-295d505c4b38.jpg" 
                alt="Медицинский персонал"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Медицинское обслуживание
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                В нашем центре работают квалифицированные врачи и медицинские сестры, 
                обеспечивающие круглосуточное наблюдение и своевременную медицинскую помощь.
              </p>
              <div className="space-y-4">
                {medicalServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-accent-foreground" />
                    </div>
                    <p className="text-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Галерея</h2>
            <p className="text-lg text-muted-foreground">Посмотрите, как выглядит наш центр</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-secondary rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Отзывы</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас родственники наших постояльцев</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="font-serif text-xl">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Контакты</h2>
              <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Phone" size={24} className="text-accent" />
                    <CardTitle className="font-serif">Телефон</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground font-medium">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground mt-2">Круглосуточно, без выходных</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Mail" size={24} className="text-accent" />
                    <CardTitle className="font-serif">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground font-medium">info@landysh-center.ru</p>
                  <p className="text-muted-foreground mt-2">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="MapPin" size={24} className="text-accent" />
                    <CardTitle className="font-serif">Адрес</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground font-medium">Москва, ул. Примерная, д. 123</p>
                  <p className="text-muted-foreground mt-2">Экологически чистый район</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Clock" size={24} className="text-accent" />
                    <CardTitle className="font-serif">Режим работы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground font-medium">24/7</p>
                  <p className="text-muted-foreground mt-2">Экскурсии: пн-вс 9:00-20:00</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="text-lg px-10">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower2" size={28} className="text-accent" />
                <span className="text-2xl font-serif font-bold">Ландыш</span>
              </div>
              <p className="text-primary-foreground/80">
                Гериатрический центр премиум-класса для комфортного проживания пожилых людей
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О центре</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('medical')} className="hover:text-accent transition-colors">Медицина</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Контакты</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@landysh-center.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 Гериатрический центр "Ландыш". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
