import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Вернуться на форум
              </Button>
            </Link>
            
            <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="AlertTriangle" size={28} className="mr-3 text-red-500" />
                  Правила сервера AquaVerse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>ВНИМАНИЕ:</strong> Незнание правил не освобождает от ответственности. 
                  Все игроки обязаны ознакомиться с данными правилами перед началом игры.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="destructive">Обязательно к прочтению</Badge>
                  <Badge variant="outline">Анархия</Badge>
                  <Badge variant="outline">Модерация</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rules Sections */}
          <div className="space-y-6">
            
            {/* Пункт 1. Общие правила */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Info" size={20} className="mr-2 text-primary" />
                  Пункт 1. Общие правила
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p><strong>1.1</strong> Цель данных правил – защита интересов пользователей и установление порядка на всех ресурсах проекта.</p>
                  <p><strong>1.2</strong> Руководство проекта подразделяется на два типа: Администрация проекта и персонал проекта.</p>
                  <p className="ml-4"><strong>1.2.1</strong> Персонал подразделяется на 4 категории: мл.Хелперы, Хелперы, Модераторы и Старшие Модераторы.</p>
                  <p><strong>1.3</strong> Любой пользователь имеет право посещать проект, если он не нарушает свод данных правил.</p>
                  <p className="ml-4"><strong>1.3.1</strong> Незнание правил не освобождает вас от ответственности.</p>
                  <p><strong>1.4</strong> Регистрируясь на проекте, вы соглашаетесь со всеми правилами данного списка, правами описанными ниже и обязанностями.</p>
                  <p><strong>1.5</strong> Оплата привилегий производится на данном сайте: <a href="https://aquaverse.ru" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">aquaverse.ru</a></p>
                  <p className="ml-4"><strong>1.5.1</strong> Средства, потраченные на привилегии не возвращаются, они считаются добровольным пожертвованием в проект.</p>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-center text-yellow-600 dark:text-yellow-400 font-medium">
                    Окончательное решение остается за Администраторами проекта.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Пункт 2. Правила чата */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" size={20} className="mr-2 text-primary" />
                  Пункт 2. Правила чата
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-6">
                    
                    {/* Подпункт 1 */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Icon name="UserX" size={16} className="mr-2 text-red-500" />
                        Подпункт 1. Оскорбительное поведение в сторону пользователей
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-red-500 pl-4">
                          <p><strong>2.1</strong> Запрещаются прямые оскорбления/унижения пользователей (игроков), использование слов оскорбительного/унизительного характера во всех игровых чатах на сервере.</p>
                          <p className="text-muted-foreground mt-1">Например: "Завали ебало", "Пошёл нахуй".</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка чата от 30 минут до 3 часов</Badge>
                        </div>
                        
                        <div className="border-l-4 border-red-500 pl-4">
                          <p><strong>2.1.1</strong> Запрещены всевозможные угрозы пользователям (игрокам) во всех игровых чатах на сервере.</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка чата от 1 до 2 часов</Badge>
                        </div>
                        
                        <div className="border-l-4 border-red-500 pl-4">
                          <p><strong>2.1.2</strong> Запрещено оскорбление/унижение, какое-либо затрагивание родных и близких людей пользователя (игрока) на сервере во всевозможных чатах, если это несет негативный посыл.</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка чата от 4 до 8 часов</Badge>
                        </div>
                        
                        <div className="border-l-4 border-red-500 pl-4">
                          <p><strong>2.1.3</strong> Запрещены сообщения непристойного (18+) характера в сторону пользователей, содержащие в себе оскорбительный/унизительный характер в глобальном чате на всех серверах.</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка чата от 1 до 2 часов</Badge>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Подпункт 2 */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Icon name="Repeat" size={16} className="mr-2 text-orange-500" />
                        Подпункт 2. Большое количество сообщений в чате и их тематика
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-orange-500 pl-4">
                          <p><strong>2.2</strong> Запрещается флудить и спамить всевозможными сообщениями в глобальном/локальном чате, а также в лс пользователям.</p>
                          <p className="text-muted-foreground mt-1">Спам – это сообщения в любой форме, одинаковые по смыслу и содержанию, отправляющиеся множество раз.</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка чата от 30 минут до 2 часов</Badge>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Подпункт 3 */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Icon name="Megaphone" size={16} className="mr-2 text-purple-500" />
                        Подпункт 3. Сообщения в целях рекламы или пропаганды чего-либо
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-purple-500 pl-4">
                          <p><strong>2.3</strong> Запрещена реклама сторонних серверов (проектов) по игре Minecraft.</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка аккаунта и IP навсегда + снятие привилегий</Badge>
                        </div>
                        
                        <div className="border-l-4 border-purple-500 pl-4">
                          <p><strong>2.3.1</strong> Запрещено упоминание сторонних серверов/проектов по Minecraft, других сторонних ресурсов во всевозможных чатах на сервере.</p>
                          <Badge variant="destructive" className="mt-2">Наказание: блокировка чата на 12 часов</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Пункт 3. Правила использования аккаунта */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="User" size={20} className="mr-2 text-primary" />
                  Пункт 3. Правила использования своего аккаунта на сервере
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p><strong>3.1</strong> Запрещена передача/продажа (попытки передачи/продажи), своего или любых других аккаунтов, как на сервере, так и в любых других интернет-сайтах, источниках.</p>
                    <Badge variant="destructive" className="mt-2">Наказание: блокировка аккаунта и IP навсегда + снятие привилегий</Badge>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p><strong>3.2</strong> Запрещен взлом аккаунта(ов) пользователей на сервере.</p>
                    <Badge variant="destructive" className="mt-2">Наказание: блокировка аккаунта и IP навсегда + снятие привилегий</Badge>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p><strong>3.3</strong> Запрещено создавать следующие никнеймы:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>Содержащие в себе оскорбительные слова</li>
                      <li>Содержащие в себе любую рекламу</li>
                      <li>Копирующие никнеймы участников официального состава</li>
                      <li>Содержащие в себе негативный политический характер</li>
                    </ul>
                    <Badge variant="destructive" className="mt-2">Наказание: блокировка аккаунта навсегда + снятие привилегий</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Читы и нарушения */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Shield" size={20} className="mr-2 text-primary" />
                  Пункт 6. Читы и серьезные нарушения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Icon name="Ban" size={16} className="mr-2 text-red-500" />
                    6.6 Использование читов
                  </h4>
                  <p className="text-sm mb-3">Запрещено использование или хранение всевозможных читов, чит-клиентов, чит-модов, чит-ресурспаков и запрещенных модификаций/программ на версии нашего сервера.</p>
                  
                  <div className="space-y-2">
                    <div>
                      <strong className="text-red-500">Запрещено:</strong>
                      <p className="text-sm text-muted-foreground">InvMove Mod, World Downloader, ElytraSwap, Baritone, FreeCam, X-Ray и т.д.</p>
                    </div>
                    
                    <div>
                      <strong className="text-green-500">Разрешено:</strong>
                      <p className="text-sm text-muted-foreground">AFK-рыбалка, миникарты, Replay Mod, индикаторы брони и здоровья, макросы, автокликеры</p>
                    </div>
                  </div>
                  
                  <Badge variant="destructive" className="mt-3">Наказание: блокировка аккаунта на 30 дней + IP на 20 дней</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Icon name="HelpCircle" size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Нужна помощь?</h3>
                  <p className="text-muted-foreground mb-4">
                    Если у вас есть вопросы по правилам или вы хотите подать апелляцию, обратитесь в поддержку.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Link to="/support">
                      <Button>
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Создать тикет
                      </Button>
                    </Link>
                    <Button variant="outline" asChild>
                      <a href="https://aquaverse.ru" target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Официальный сайт
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}