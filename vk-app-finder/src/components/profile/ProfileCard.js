import React from "react";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import "./ProfileCard.css";
import Icon28CancelOutline from "@vkontakte/icons/dist/28/cancel_outline";
import config from "../../config";
import { Group, List } from "@vkontakte/vkui";
import { Cell } from "@vkontakte/vkui/dist/es6";
import { autorun } from "mobx";

const ProfileCard = (props) => {
  const animal = props.animal;
  const breed = animal.breed === "" ? "порода не указана" : animal.breed;
  const date = new Date(animal.date.replace(" ", "T")).toLocaleDateString()
  .replace(/\//g, '.');

  return (
    <Card
      onClick={() => props.onClick(animal.id)}
      style={{
        height: "max(190, auto)",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
      className={"profile__card__container"}
      size="l"
      mode="shadow"
    >
      <div
        style={{ display: "flex", flexGrow: 1, height: "100%", width: "100%" }}
      >
        <div className={"profile__card__photo__container"}>
          <div className={"profile__card__photo__corner"}>
            <div className={"profile__card__photo__breed"}>{breed}</div>
          </div>
          <img
            className={"profile__card__photo"}
            src={config.baseUrl + `lost/img?id=${animal.picture_id}`}
            alt={""}
          />
        </div>
        <Group className={"profile__card__details"}>
          <List className={"profile__attributes_list"}>
            <Icon28CancelOutline
              onClick={() => props.cancel(animal.id)}
              className={"profile__cancel-icon"}
            />
            <div className={"profile__card__info_cell"}>
              <span style={{ fontWeight: "bold" }}>Адрес: </span>
              {props.address}
            </div>

            <div className={"profile__card__info_cell"}>
              <span style={{ fontWeight: "bold" }}>Дата пропажи: </span>
              {date}
            </div>

            <div className={"profile__card__info_cell"}>
              <span style={{ fontWeight: "bold" }}>Описание: </span>
              {animal.description}
            </div>
          </List>
        </Group>
      </div>
    </Card>
  );
};

export default ProfileCard;
