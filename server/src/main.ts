import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
    try {
        const PORT = 5000;
        const app = await NestFactory.create(AppModule);
        app.enableCors();
        await app.listen(PORT, () => console.log(`server was started on port ${PORT}!`));
    } catch (error) {
        console.log(error);        
    }
}

// в сервисах(SERVICES) описываем логику
// контроллерах(CONTROLLERS) работаем с запросами и ответами/ клиент-серверная составляющая
// в схемах(SCHEMAS) описываются данные с которыми идет взаимодействие
// в DTO описываются обьекты , которые ожидаются на вход в какие то функции в котроллерах   
// все это подключается в app.module.ts(основной при запуске, указывается в main.ts)
start();