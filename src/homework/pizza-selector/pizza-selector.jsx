import { pizzaTopping, pizzaType } from '../../data/pizzaData.json';
import { useState, useId } from 'react';

function Exercise() {
  return (
    <div className="flex flex-col items-center m-5 gap-10">
      <h2 className="sr-only">토핑 추가선택</h2>
      <FormPizza />
    </div>
  );
}

const INITIAL_ORDER = {
  type: pizzaType[0].title,
  isAllToppings: false,
  toppings: [],
};

const INITIAL_PIZZAIMAGE = {
  isAllToppings: false,
  pizzaImage: '일반도우'.split(', '),
};

function FormPizza() {
  const [selectedToppings, setSelectedToppings] = useState(INITIAL_ORDER);
  const [showImagePizza, setImagePizza] = useState(INITIAL_PIZZAIMAGE);

  const handleChangeAllToppings = (e) => {
    const totalTopping = pizzaTopping.map((item) => item.title);
    const { checked } = e.target;

    const nextOrderState = {
      ...selectedToppings,
      isAllToppings: checked,
      toppings: checked ? totalTopping : [],
    };
    setSelectedToppings(nextOrderState);

    const selectAllImages = [
      ...showImagePizza.pizzaImage,
      ...totalTopping.flat(),
    ];

    const nextPizzaSelectImage = {
      ...showImagePizza,
      isAllToppings: checked,
      pizzaImage: checked
        ? selectAllImages
        : [`${showImagePizza.pizzaImage[0]}`],
    };

    setImagePizza(nextPizzaSelectImage);
  };

  const handleChangePizzaType = (e) => {
    const { value } = e.target;
    const nextOrderState = {
      ...selectedToppings,
      type: value,
      toppings: [],
    };

    const nextPizzaImage = [value];

    const nextPizzaSelectImage = {
      ...showImagePizza,
      pizzaImage: nextPizzaImage,
    };

    setImagePizza(nextPizzaSelectImage);
    setSelectedToppings(nextOrderState);
  };

  const handleToggleTopping = (e) => {
    let nextToppings = [];
    let nextPizzaImage = [];
    let deselectPizza = [];
    const { value: toppingName, checked: isChecked } = e.target;
    const isToppingChecked = selectedToppings.toppings.includes(toppingName);
    const toppingsCOunt = selectedToppings.toppings.length;
    const LIMIT_TOPPING_COUNT = 8;

    if (toppingsCOunt === LIMIT_TOPPING_COUNT && !isToppingChecked) {
      alert('너무 많이 고른거 아니여??? ');
    }

    if (!isToppingChecked) {
      nextToppings = [...selectedToppings.toppings, toppingName];
      nextPizzaImage = [...showImagePizza.pizzaImage, toppingName];
      const nextPizzaSelectImage = {
        ...showImagePizza,
        pizzaImage: nextPizzaImage,
      };

      setImagePizza(nextPizzaSelectImage);
    } else {
      nextToppings = selectedToppings.toppings.filter(
        (topping) => topping !== toppingName
      );
      deselectPizza = showImagePizza.pizzaImage.filter(
        (item) => item !== toppingName
      );
      const deselectPizzaImage = {
        ...showImagePizza,
        pizzaImage: deselectPizza,
      };
      setImagePizza(deselectPizzaImage);
    }

    setSelectedToppings((prevState) => ({
      ...prevState,
      toppings: nextToppings,
    }));
  };

  const calculateTotalPrice = () => {
    if (!selectedToppings.toppings) return 0;

    let totalPrice = 0;
    pizzaTopping.forEach((item) => {
      selectedToppings.toppings.forEach((item2) => {
        if (item.title === item2) {
          totalPrice += parseInt(item.price);
        }
      });
    });
    return totalPrice;
  };

  const handleOrder = (e) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    const nextPizzaSelectImage = {
      ...showImagePizza,
      pizzaImage: ['일반도우'],
    };
    setImagePizza(nextPizzaSelectImage);
    setSelectedToppings(INITIAL_ORDER);
  };

  return (
    <>
      <div className=" text-3xl font-bold"> 🍕피자를 선택해 주세요~!🍕</div>
      <form
        onSubmit={handleOrder}
        onReset={handleCancel}
        className="flex gap-10 m-auto w-full"
      >
        <div className="w-[900px]">
          {showImagePizza.pizzaImage.map((item, index) => {
            const photoUrl = `/food/${item}.png`;
            return <PicturePizza key={index} photo={photoUrl} name={item} />;
          })}
        </div>

        <div className="w-full">
          {pizzaType.map((item) => {
            return (
              <SelectedPizza
                key={item.id}
                item={item}
                toppings={selectedToppings.type}
                onToggleTopping={handleChangePizzaType}
                totalPrice={calculateTotalPrice}
              >
                {item.title}
              </SelectedPizza>
            );
          })}

          <div className="border border-t-stone-950"></div>
          <SelectedPizza
            checkbox
            toppings={selectedToppings.isAllToppings}
            onToggleTopping={handleChangeAllToppings}
          >
            전체선택
          </SelectedPizza>

          <div className="border border-t-stone-950"></div>
          {pizzaTopping.map((item) => {
            return (
              <SelectedPizza
                checkbox
                key={item.id}
                item={item}
                toppings={selectedToppings.toppings}
                onToggleTopping={handleToggleTopping}
                totalPrice={calculateTotalPrice}
              >
                {item.title}
              </SelectedPizza>
            );
          })}

          <div className="totalPrice border shadow-2xl bg-sky-500 rounded-lg p-3 text-center text-white">
            가격 {calculateTotalPrice()} 원
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="border shadow-2xl bg-sky-500 text-white p-4 px-20 rounded-xl"
            >
              주문
            </button>
            <button
              type="reset"
              className="border shadow-2xl bg-sky-500 text-white p-4 px-20 rounded-xl"
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

function SelectedPizza({
  checkbox,
  item = '',
  toppings,
  onToggleTopping,
  children,
}) {
  const inputType = checkbox ? 'checkbox' : 'radio';

  const contentPrice = `+${item.price}원`;
  let isChecked = false;
  if (children !== '전체선택') {
    isChecked = Array.isArray(toppings)
      ? toppings.includes(item.title)
      : toppings === item.title;
  } else {
    isChecked = toppings;
  }

  return (
    <div className="space-y-4 m-3">
      <label className="flex items-center">
        <input
          type={inputType}
          className={`form-${inputType} h-5 w-5 text-indigo-600`}
          checked={isChecked}
          value={children}
          onChange={(e) => onToggleTopping(e)}
        />
        {inputType === 'checkbox' && (
          <>
            <span className="ml-2 text-gray-700">
              {children} {item ? `토핑추가` : ``}
            </span>
            <span className="ml-auto price text-gray-700">
              {' '}
              {item ? contentPrice : ``}
            </span>
          </>
        )}

        {inputType !== 'checkbox' && (
          <span className="ml-2 text-gray-700 ">{children}</span>
        )}
      </label>
    </div>
  );
}

function PicturePizza({ photo, name = '' }) {
  const id = useId();

  return (
    <figure className="relative">
      <div className="absolute w-full">
        <img
          key={id}
          src={photo}
          alt={name}
          className="min-w-500 min-h-500 w-full h-full"
          // onChange={onShowPizzaImage}
        />
      </div>
      <figcaption aria-label={name} title={name} />
    </figure>
  );
}

export default Exercise;
