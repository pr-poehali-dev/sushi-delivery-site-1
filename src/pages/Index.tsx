import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const sushiMenu = [
    {
      id: 1,
      name: "Филадельфия",
      description: "Лосось, сливочный сыр, огурец",
      price: 350,
      image: "img/89f8193e-70c2-4d1e-a8eb-07ed5071d6bf.jpg",
      category: "Роллы"
    },
    {
      id: 2,
      name: "Калифорния",
      description: "Краб, авокадо, огурец, икра тобико",
      price: 320,
      image: "img/89f8193e-70c2-4d1e-a8eb-07ed5071d6bf.jpg",
      category: "Роллы"
    },
    {
      id: 3,
      name: "Нигири сет",
      description: "Лосось, тунец, креветка (6 шт)",
      price: 480,
      image: "img/680d392a-d225-4055-96bc-1ff0a1bfc9e2.jpg",
      category: "Нигири"
    },
    {
      id: 4,
      name: "Дракон",
      description: "Угорь, авокадо, соус унаги",
      price: 420,
      image: "img/89f8193e-70c2-4d1e-a8eb-07ed5071d6bf.jpg",
      category: "Роллы"
    },
    {
      id: 5,
      name: "Сашими сет",
      description: "Лосось, тунец, гребешок (9 кусков)",
      price: 550,
      image: "img/680d392a-d225-4055-96bc-1ff0a1bfc9e2.jpg",
      category: "Сашими"
    },
    {
      id: 6,
      name: "Спайси тунец",
      description: "Тунец, острый соус, авокадо",
      price: 380,
      image: "img/89f8193e-70c2-4d1e-a8eb-07ed5071d6bf.jpg",
      category: "Роллы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍣</span>
              <h1 className="text-2xl font-bold text-foreground">Суши Доставка</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина (0)
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-4">
                Свежие суши с <span className="text-primary">бесплатной доставкой</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Традиционные японские блюда из свежайших ингредиентов. 
                Доставим за 30 минут по всему городу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ArrowDown" size={20} className="mr-2" />
                  Выбрать суши
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как заказать
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="img/db4281dd-f53d-4e40-9dc2-d168b6b39357.jpg" 
                alt="Доставка суши" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставляем за 30 минут или компенсируем заказ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Fish" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Свежие продукты</h3>
              <p className="text-muted-foreground">Только свежая рыба и морепродукты премиум качества</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">100% гарантия свежести или вернем деньги</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наше меню</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Традиционные японские блюда, приготовленные мастерами своего дела
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="default" className="px-4 py-2 cursor-pointer">Все</Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer">Роллы</Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer">Нигири</Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer">Сашими</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sushiMenu.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                    <Button size="sm">
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section id="delivery" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Доставка и оплата</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Icon name="MapPin" size={24} className="mr-2 text-primary" />
                Зоны доставки
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Центр города</span>
                  <span className="text-green-600 font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span>До 5 км от центра</span>
                  <span>150 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>5-10 км от центра</span>
                  <span>250 ₽</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Icon name="CreditCard" size={24} className="mr-2 text-primary" />
                Способы оплаты
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Wallet" size={20} className="mr-3 text-primary" />
                  <span>Наличными курьеру</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-3 text-primary" />
                  <span>Банковской картой</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Smartphone" size={20} className="mr-3 text-primary" />
                  <span>Онлайн переводом</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">🍣</span>
                Суши Доставка
              </h3>
              <p className="text-background/80">
                Лучшие суши в городе с доставкой прямо к вашему дому. 
                Работаем ежедневно с 10:00 до 23:00.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-3" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-3" />
                  <span>order@sushi-delivery.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={18} className="mr-3" />
                  <span>ул. Пушкина, д. 10</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span>10:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб-Вс:</span>
                  <span>10:00 - 24:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2024 Суши Доставка. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;