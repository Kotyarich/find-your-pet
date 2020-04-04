import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import {PanelHeaderSimple} from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {PanelHeaderBack} from "@vkontakte/vkui/dist/es6";
import "./Home.css"

const Home = ({id, go, fetchedUser}) => (
  <Panel className={'main-color'} separator={false} id={id}>
    <PanelHeader  left={
      <PanelHeaderButton>Мои объявления</PanelHeaderButton>
    }/>

    <Group title="Navigation Example">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="persik">
          Show me the Persik, please!
        </Button>
      </Div>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
