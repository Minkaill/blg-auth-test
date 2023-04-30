import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUsed = await User.findOne({ username });

    if (isUsed) {
      return res.json({
        message: "Имя пользователя уже занят.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
    });

    await newUser.save();

    res.json({
      newUser,
      message: "Регистрация прошла успешно",
    });
  } catch (error) {
    res.json({
      message: "Ошибка при создании пользователя",
    });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Поиск пользователя
    const user = await User.findOne({ username });

    // Если пользователь не найден
    if (!user) {
      return res.json({
        message: "Неверный логин или пароль",
      });
    }

    // Расшифровка пароля для сравнения
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // если пароль неверный
    if (!isPasswordCorrect) {
      return res.json({
        message: "Неверный логин или пароль",
      });
    }

    // Создание токена для пользователя
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );

    // Возврат
    res.json({
      token,
      user,
      message: "Вы авторизовались!",
    });
  } catch (error) {
    res.json({
      message: "Ошибка авторизации",
    });
  }
};

// Get me user
export const getMe = async (req, res) => {
  try {
  } catch (error) {
    res.json({
      message: "Ошибка при получении данных!",
    });
  }
};
