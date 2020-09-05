import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import './MentalHygiene.css'

const MentalHygiene = () => {
  return (
    <Container>
      <h2>Mental Hygiene</h2>
      <h1>10 Tips for Mental &#38; Emotional Health</h1>
      <p>
        Mental and emotional health is an essential part of your overall health
        and wellbeing. Managing emotions and maintaining emotional balance is an
        important skill. When you manage your emotional health, it helps you
        face challenges and stress. Lack of emotional regulation skills can lead
        to poor mental health and difficulty in relationships.
      </p>

      <p>
        It is as essential to care for your mental health as it is to care for
        your physical health. A few activities you can follow for your mental
        health are:
      </p>

      <Accordion className="accordion-mental-hygiene" defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Take care of your physical health
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              You can stay healthy by eating well, getting adequate rest and
              exercise. Eating fresh foods rich in vitamin B-12 and Omega 3
              fatty acids keep up levels of mood-regulating chemicals in the
              brain. Getting enough rest for your body helps to heal its daily
              wear and tear, while lack of sleep can make you feel tired,
              stressed and cranky.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Get fresh air and exposure to sunlight
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              A study has shown that exposure to sunlight increases the
              production of serotonin, a chemical that regulates mood in the
              brain.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Take care of yourself
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Investing time in self-care contributes to your mental and
              emotional wellbeing. Set time aside for yourself; attend to your
              own emotional needs; read a book; pamper yourself. You could learn
              to use aspects of mindfulness to relax.“Mindfulness simply means
              being in the present without thinking of the past or future;
              choosing what you respond to, rather than getting carried away
              with everything that appears in your mind or your experience; to
              focus on one thing at a time, be non-judgmental and cultivate an
              attitude of impermanence towards things and situations. This helps
              you stay open to experiences and helps you not get overly affected
              by them,” says Dr M Manjula, additional professor of clinical
              psychology, National Institute of Mental Health and Neurosciences
              (NIMHANS).
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Spend time with people whose company you enjoy
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Spending time with people you love and get along with gives you a
              sense of being valued and appreciated. Having healthy
              relationships with your friends, family, colleagues, and neighbors
              can increase your sense of emotional wellbeing and give you a
              feeling of connectedness. Have lunch with a colleague, or make
              plans to meet a friend you haven’t spent time with in a while.
              Spending quality time with someone in person — if this is an
              option — is often better than using technology to connect with
              them.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Pursue a hobby, or a new activity
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Participating in activities that you enjoy helps you stay engaged
              and in turn, happy. Picking up a new skill challenges you,
              increases your concentration levels and makes you feel good about
              learning something new. It also increases your confidence in being
              able to face new situations, challenges and people.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Manage your stress
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              You, just like everyone else, will have certain triggers that
              cause you stress. You can try to avoid a stressful situation, but
              when you don’t have a choice but to face the event or person that
              causes you stress, you need to find a way to cope with it. “If you
              know you get stressed by an exam, you must learn how to put exams
              in perspective and not let them become life-defining events for
              you, because your exams are something you will just have to face.
              In some cases, avoiding stress-generating situations may work, but
              you must be able to differentiate between when you can avoid them
              and when you cannot. So find your strategy to manage your stress
              so that you can take better care of yourself. This could include
              talking to a friend, believing in yourself, reappraising and
              reinterpreting your situation, meditating, going for a walk,
              listening to music, and exercising, just to name a few,” says
              Bangalore-based counselor Maullika Sharma.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            Identify your strengths, weaknesses, and boundaries
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              Acknowledge your strengths and work on your weaknesses. Accepting
              that you have some weaknesses just like everyone else is a key to
              your mental and emotional wellbeing. Set realistic goals and
              consciously choose to participate in activities and surround
              yourself with people who further your goal rather than distract
              you.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            Practice gratitude
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              When you practice gratitude for what you have, it can take away
              focus from what you don’t. Studies show that being grateful for
              what you have helps you stay optimistic about your future and
              boosts your mental health.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            Express yourself
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              Poorly managed or unregulated emotions can be harmful to your
              mental health. You may shy away from expressing emotions or
              feelings that you think are ‘negative.’ Being able to express what
              you’re feeling, what you like or don’t like, can help you
              de-clutter your mind. Suppressing emotions is believed to lead to
              depression or anxiety disorders. “Every emotion is important and
              essential. What makes it healthy or unhealthy is the intensity of
              the experience, and how it was expressed (too much or too little),
              the appropriateness of the expression and the frequency of the
              emotion occurring,” says Dr Manjula.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="9">
            Ask for help when you feel overwhelmed
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              When you feel sad, challenged, frustrated, confused, angry, or
              just simply overwhelmed and unable to cope, speak to someone you
              trust – a spouse, friend, parent, sibling or relative. If you
              think you need even more support, reach out to a physician or
              counselor. The earlier you reach out, the better.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default MentalHygiene;
