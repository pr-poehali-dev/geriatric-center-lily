import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/ЛОГО.png" 
                alt="Логотип Ландыш" 
                className="h-12 w-auto"
              />
              <span className="text-3xl font-serif font-medium text-primary tracking-wide">Ландыш</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-light tracking-wide">
                О центре
              </a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-light tracking-wide">
                Услуги
              </a>
              <a href="/tariffs" className="text-foreground/70 hover:text-primary transition-colors font-light tracking-wide">
                Тарифы
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-light tracking-wide">
                Контакты
              </a>
            </div>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/files/IMG_5216.JPG)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-8 bg-white/20 text-white border-white/30 px-6 py-2 text-base font-light backdrop-blur-sm">
              С 1987 года
            </Badge>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Достоинство<br />каждого дня
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Гериатрический центр премиум-класса, где забота о старшем поколении сочетается с безупречным качеством и уважением к личности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Записаться на экскурсию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-20 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/files/IMG_5216.JPG" 
                alt="Гериатрический центр Ландыш - классическая архитектура у моря"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-3">Элегантность и спокойствие</h3>
                <p className="text-lg md:text-xl font-light text-white/90 max-w-3xl">
                  Архитектура в классическом стиле на берегу моря — идеальное место для комфортной жизни старшего поколения
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Award', title: '37 лет', subtitle: 'безупречной работы' },
              { icon: 'Users', title: '120+', subtitle: 'постоянных резидентов' },
              { icon: 'Stethoscope', title: '24/7', subtitle: 'медицинский контроль' },
              { icon: 'Heart', title: '98%', subtitle: 'удовлетворённых семей' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon name={stat.icon} size={28} className="text-accent" />
                </div>
                <div className="text-4xl font-serif font-medium text-primary mb-2">{stat.title}</div>
                <p className="text-muted-foreground font-light tracking-wide">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      <section id="about" className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/eae0aec9-421e-4200-bd3a-141e977c6dd0.jpg)',
            mixBlendMode: 'multiply'
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 font-light">О нас</Badge>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-8 leading-tight">
                Традиции качества и заботы
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                С 1987 года гериатрический центр «Ландыш» устанавливает стандарты ухода за старшим поколением. Мы создали пространство, где комфорт, достоинство и профессиональная медицинская помощь существуют в гармонии.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                Наша философия основана на глубоком уважении к личности каждого резидента. Здесь не просто оказывают услуги — здесь дарят внимание, тепло и искреннюю заботу.
              </p>
              <Button variant="outline" size="lg" className="px-8">
                История центра
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/2025-12-29 23.04.19.jpg" 
                  alt="Счастливая семья у гериатрического центра Ландыш"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl bg-accent/10 -z-10"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-primary/5 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 w-1/4 h-2/3 opacity-10 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/51189975-e8e8-466d-a2b9-3ef639dc12fd.jpg)',
            mixBlendMode: 'multiply'
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 font-light">Наши услуги</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6 leading-tight">
              Комплексная забота о здоровье
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Индивидуальный подход к каждому резиденту и полный спектр медицинских услуг
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Activity',
                title: 'Медицинское сопровождение',
                description: 'Круглосуточное наблюдение опытных врачей и медсестёр, регулярные осмотры и консультации узких специалистов',
              },
              {
                icon: 'Home',
                title: 'Комфортное проживание',
                description: 'Номера категории люкс с индивидуальным дизайном, качественная мебель и бытовая техника премиум-класса',
              },
              {
                icon: 'Utensils',
                title: 'Премиум питание',
                description: 'Авторское меню от шеф-повара, учёт индивидуальных диетических требований и личных предпочтений',
              },
              {
                icon: 'Dumbbell',
                title: 'Реабилитация',
                description: 'Индивидуальные программы ЛФК, физиотерапия, массаж и другие процедуры для поддержания здоровья',
              },
              {
                icon: 'Music',
                title: 'Досуг и культура',
                description: 'Библиотека, кинозал, музыкальные вечера, творческие мастерские и образовательные лекции',
              },
              {
                icon: 'TreePine',
                title: 'Прогулки на природе',
                description: 'Ухоженный парк с прогулочными дорожками, зонами отдыха и ландшафтным дизайном',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/tariffs'}>
              Смотреть все тарифы
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 font-light">Территория и интерьеры</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6 leading-tight">
              Пространство для жизни
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Архитектура классического стиля, ухоженная территория и комфортные номера премиум-класса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-fade-in hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/files/WhatsApp Image 2025-10-20 at 11.12.48 (2).jpeg" 
                alt="Здание гериатрического центра Ландыш с фонтаном"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">Фасад и территория</h3>
                  <p className="font-light text-white/90">Классическая архитектура и ухоженный парк с фонтаном</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-fade-in hover:shadow-2xl transition-all" style={{ animationDelay: '100ms' }}>
              <img 
                src="https://cdn.poehali.dev/files/IMG_2331.JPG" 
                alt="Комфортный номер с медицинской кроватью"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">Номера категории люкс</h3>
                  <p className="font-light text-white/90">Функциональная мебель и медицинское оборудование</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline">
              Посмотреть все фото
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/2fe51be0-cd68-4bc9-8b19-ed9dec80cb46.jpg)',
            mixBlendMode: 'overlay'
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight">
              Философия нашей работы
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-light">
              «Мы верим, что каждый человек заслуживает прожить старшие годы в достоинстве, комфорте и окружении искренней заботы. Наша миссия — создать пространство, где уважение к личности сочетается с высочайшими стандартами медицинской помощи»
            </p>
            <Separator className="my-12 bg-primary-foreground/20" />
            <p className="text-lg opacity-75 font-light tracking-wide">
              Основатель центра, 1987
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 font-light">Контакты</Badge>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6 leading-tight">
                Запишитесь на экскурсию
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Приглашаем вас лично познакомиться с нашим центром и командой
              </p>
            </div>

            <Card className="border-border/50 shadow-xl animate-scale-in">
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-foreground mb-2 tracking-wide">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-foreground mb-2 tracking-wide">
                        Телефон
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-foreground mb-2 tracking-wide">
                      Электронная почта
                    </label>
                    <Input type="email" placeholder="example@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-foreground mb-2 tracking-wide">
                      Сообщение
                    </label>
                    <Textarea placeholder="Расскажите, что вас интересует..." className="min-h-32" />
                  </div>
                  <Button size="lg" className="w-full h-14 text-base">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: 'Phone', title: 'Телефон', info: '+7 (495) 123-45-67' },
                { icon: 'Mail', title: 'Email', info: 'info@landysh-center.ru' },
                { icon: 'MapPin', title: 'Адрес', info: 'Москва, ул. Примерная, 123' },
              ].map((contact, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Icon name={contact.icon} size={20} className="text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1 font-light tracking-wide">{contact.title}</div>
                  <div className="text-foreground font-light">{contact.info}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-64 h-64 opacity-10"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/2fe51be0-cd68-4bc9-8b19-ed9dec80cb46.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 opacity-10"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/f35229b3-d31a-45f1-b578-cbca25243c7d/files/2fe51be0-cd68-4bc9-8b19-ed9dec80cb46.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
            transform: 'scaleX(-1)'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-2 bg-accent/5 blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/ЛОГО.png" 
                  alt="Логотип Ландыш" 
                  className="h-14 w-auto brightness-0 invert opacity-80"
                />
                <span className="text-3xl font-serif font-medium tracking-wide">Ландыш</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed font-light max-w-md">
                Гериатрический центр премиум-класса. С 1987 года устанавливаем стандарты заботы о старшем поколении.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4 tracking-wide">Навигация</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">
                    О центре
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="/tariffs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4 tracking-wide">Контакты</h4>
              <ul className="space-y-3">
                <li className="text-primary-foreground/70 font-light">+7 (495) 123-45-67</li>
                <li className="text-primary-foreground/70 font-light">info@landysh-center.ru</li>
                <li className="text-primary-foreground/70 font-light">Москва, ул. Примерная</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-primary-foreground/60 font-light text-sm tracking-wide">
              © 2024 Гериатрический центр «Ландыш». Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;