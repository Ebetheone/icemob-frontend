"use client";
import {
  ShoppingCartOutlined,
  UserOutlined,
  LoginOutlined,
  EditOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Modal, Avatar, Drawer, Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, use, useEffect, useState } from "react";
import { useCartContext } from "../context/cart.context";
import { useUserContext } from "../context/user.context";
import { CartContextType } from "../typin";
import { AuthModalType } from "../utils/constants";
import { AuthModalScene } from "./auth/AuthModal.scene";

const Header = () => {
  const [visibleAuthModal, setVisibleAuthModal] = useState<
    AuthModalType | undefined
  >(AuthModalType.None);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [cartQty, setCartQty] = useState(0);

  const router = useRouter();
  const { user, setUserData } = useUserContext();
  const { cartQuantity, openCart }: CartContextType = useCartContext();

  useEffect(() => {
    const userData = window.localStorage.getItem("USER_DATA");
    if (userData) setUserData(JSON.parse(userData));
  }, []);

  const onLogOut = async () => {
    localStorage.removeItem("USER_DATA");
    router.push("/");
    window.location.reload();
  };

  // const openDrawerToggle = () => {};
  const closeDrawerToggle = () => {
    setOpenDrawer(false);
  };

  const LoginMenu = () => (
    <Menu mode="vertical" className="menu">
      <Menu.Item
        key="login"
        icon={<LoginOutlined />}
        onClick={() =>
          visibleAuthModal !== AuthModalType.Login &&
          setVisibleAuthModal(AuthModalType.Login)
        }
      >
        Нэвтрэх
      </Menu.Item>
      <Menu.Item
        key="register"
        icon={<EditOutlined />}
        onClick={() =>
          visibleAuthModal !== AuthModalType.Register &&
          setVisibleAuthModal(AuthModalType.Register)
        }
      >
        Бүртгүүлэх
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
  const UserMenu = () => (
    <Menu mode="vertical" className="menu">
      <Menu.Item
        key="login"
        icon={<LoginOutlined />}
        onClick={() => onLogOut()}
      >
        Гарах
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
  return (
    <section className="header">
      <div>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="header-logo"
          />
        </Link>
      </div>
      <ul>
        <div className=" navbar-right">
          <li>
            <Link href="/product">Бүтээгдэхүүн</Link>
          </li>
          <li>
            <Link href="/">Бидний тухай</Link>
          </li>
          <li>
            <Link href="/information">Мэдээ мэдээлэл</Link>
          </li>
          <li>
            <Link href="/contact">Холбогдох</Link>
          </li>
          <li>
            {user ? (
              <Suspense fallback={<p>Loading</p>}>
                <Badge count={cartQuantity}>
                  <Avatar shape="square" size="default">
                    <ShoppingCartOutlined onClick={openCart} />
                  </Avatar>
                </Badge>
              </Suspense>
            ) : (
              ""
            )}
          </li>

          <li>
            <Suspense>
              <Dropdown
                overlay={!user ? LoginMenu : UserMenu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Avatar
                  icon={user ? <UserOutlined /> : <MenuOutlined />}
                  shape="square"
                />
              </Dropdown>
            </Suspense>
          </li>
          {visibleAuthModal && (
            <Modal
              open={visibleAuthModal !== AuthModalType.None}
              visible={!!visibleAuthModal}
              footer={null}
              onCancel={() => setVisibleAuthModal(undefined)}
              className="auth-container"
            >
              <AuthModalScene
                visibleAuthModal={visibleAuthModal}
                setVisibleAuthModal={setVisibleAuthModal}
              />
            </Modal>
          )}
        </div>
      </ul>
    </section>
  );
};
export default Header;
