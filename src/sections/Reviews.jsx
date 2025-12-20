import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import avatar1 from "../assets/reviews/avatar1.jpg";
import avatar2 from "../assets/reviews/avatar2.jpg";
import avatar3 from "../assets/reviews/avatar3.jpg";
import avatar4 from "../assets/reviews/avatar4.jpg";
import avatar5 from "../assets/reviews/avatar5.jpg";
import avatar6 from "../assets/reviews/avatar6.jpg";

export default function Reviews() {
  const reviews = [
    {
      name: "Александр М.",
      avatar: avatar1,
      rating: 5,
      text: "Отличное устройство! Установил месяц назад, работает без нареканий. Качество записи отличное, особенно ночью. Очень доволен покупкой.",
      date: "2 недели назад",
    },
    {
      name: "Мария К.",
      avatar: avatar2,
      rating: 5,
      text: "Покупкой очень довольна. Ультратонкий корпус выглядит стильно, не занимает много места. Функционал богатый, все работает как часы.",
      date: "3 недели назад",
    },
    {
      name: "Дмитрий В.",
      avatar: avatar3,
      rating: 5,
      text: "Лучший регистратор из всех, что у меня были. Автоматическая запись, широкий угол обзора, качественная картинка. Рекомендую!",
      date: "1 месяц назад",
    },
    {
      name: "Елена С.",
      avatar: avatar4,
      rating: 5,
      text: "Установила на свой автомобиль, очень удобно. Не нужно ничего включать-выключать, все работает автоматически. Качество на высоте.",
      date: "1 месяц назад",
    },
    {
      name: "Игорь П.",
      avatar: avatar5,
      rating: 5,
      text: "Отличное соотношение цена-качество. Много функций, которые действительно нужны. Доставка быстрая, установка простая.",
      date: "2 месяца назад",
    },
    {
      name: "Ольга Н.",
      avatar: avatar6,
      rating: 5,
      text: "Пользуюсь уже два месяца, все отлично. Качество записи превосходное, особенно в темное время суток. Очень рекомендую к покупке.",
      date: "2 месяца назад",
    },
  ];

  return (
    <section id="reviews" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title="Отзывы покупателей"
          subtitle="Что говорят наши клиенты о Fugicar FC8."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-fuchsia-400/30 bg-white/3 p-6 backdrop-blur-sm ">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-fuchsia-400/30"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                {review.text}
              </p>
              <p className="text-xs text-white/50">{review.date}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
