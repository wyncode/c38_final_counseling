import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// included home page 'refreshpage onclick button with array of quotes'
const quotes = [
  '"Life shrinks or expands in proportion to one`s courage."  -Anais Nin',
  '"We don`t see things as they are, we see them as we are." -Anais Nin',
  '"Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country." -Anais Nin',
  '"We do not grow absolutely, chronologically. We grow sometimes in one dimension, and not in another; unevenly. We grow partially. We are relative. We are mature in one realm, childish in another. The past, present, and future mingle and pull us backward, forward, or fix us in the present. We are made up of layers, cells, constellations."-Anais Nin',
  '"The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery." - Anais Nin',
  '"Our culture made a virtue of living only as extroverts. We discouraged the inner journey, the quest for a center. So we lost our center and have to find it again." -Anais Nin',
  '"The personal life deeply lived always expands into truths beyond itself." -Anais Nin',
  '"If you limit yourself only to what seems possible or reasonable, you disconnect yourself from what you truly want, and all that is left is compromise." -Anais Nin',
  '"You cannot save people. You can only love them." -Anais Nin',
  '"I take pleasure in my transformations. I look quiet and consistent, but few know how many women there are in me." -Anais Nin',
  '"I postpone death by living" -Anais Nin',
  '"Life is a full circle, widening until it joins the circle motions of the infinite." -Anais Nin',
  '"When you make a world tolerable for yourself, you make a world tolerable for others." -Anais Nin',
  '"When we choose to love, we choose to move against fear, against alienation and separation. The choice to love is a choice to connect, to find ourselves in the other." -Bell Hooks',
  '"What we do is more important than what we say or what we say we believe." -Bell Hooks',
  '"Shaming is one of the deepest tools of imperialist, white supremacist, capitalist patriarchy because shame produces trauma and trauma often produces paralysis." -Bell Hooks',
  '"To begin by always thinking of love as an action rather than a feeling is one way in which anyone using the word in this manner automatically assumes accountability and responsibility." -Bell Hooks',
  '"For me, forgiveness and compassion are always linked: how do we hold people accountable for wrongdoing and yet at the same time remain in touch with their humanity enough to believe in their capacity to be transformed?" -Bell Hooks',
  '"Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape." -Bell Hooks',
  '"The true teacher is within us. A good teacher is someone who can help you to go back and touch the true teacher within, because you already have the insight within you." -Bell Hooks',
  '"Because we have learned to believe negativity is more realistic, it appears more real than any positive voice." -Bell Hooks',
  '"Love is a combination of care, commitment, knowledge, responsibility, respect and trust." -Bell Hooks',
  '"When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak." -Audre Lorde',
  '"Caring for myself is not self-indulgence, it is self-preservation" -Audre Lorde',
  '"When I dare to be powerful - to use my strength in the service of my vision, then it becomes less and less important whether I am afraid." -Audre Lorde',
  '"We are all in the process of becoming." -Audre Lorde',
  '"I am my best work - a series of road maps, reports, recipes, doodles, and prayers from the front lines." -Audre Lorde',
  '"I have come to believe over and over again that what is most important to me must be spoken, made verbal and shared, even at the risk of having it bruised or misunderstood." -Audre Lorde',
  '"You become courageous by doing courageous acts...Courage is a habit." -Mary Daly',
  '"If you want to fly, you have to give up the things that weigh you down." -Toni Morrison',
  '"I know the world is bruised and bleeding, and though it is important not to ignore its pain, it is also critical to refuse to succumb to its malevolence. Like failure, chaos contains information that can lead to knowledge - even wisdom. Like art." -Toni Morrison',
  '"There is no time for despair, no place for self-pity, no need for silence, no room for fear. We speak, we write, we do language. That is how civilizations heal." -Toni Morrison',
  '"All important things are hard." -Toni Morrison',
  '"The journey of a thousand miles starts with a single step." Lao Tzu',
  '"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love." -Lao Tzu',
  '"Nature does not hurry, yet everything is accomplished." -Lao Tzu',
  '"When I let go of what I am, I become what I might be." -Lao Tzu',
  '"When I let go of what I am, I become what I might be." -Lao Tzu',
  '"When I let go of what I am, I become what I might be." -Maya Angelou',
  '"I created myself. I have taught myself so much." -Maya Angelou',
  '"Not everything that is faced can be changed. But nothing can be changed until it is faced." James A. Baldwin',
  '"You have to decide who you are and force the world to deal with you, not with its idea of you." -James A. Baldwin',
  '"One cannot deny the humanity of another without diminishing one`s own." -James A. Baldwin',
  '"The place in which I`ll fit will not exist until I make it." -James A. Baldwin',
  '"You`ve got to tell the world how to treat you. If the world tells you how you are going to be treated, you are in trouble." -James A. Baldwin',
  '"From my point of view, your life is already a miracle of chance waiting for you to shape its destiny." -Toni Morrison',
  '"Definitions belong to the definers, not the defined." -Toni Morrison',
  '"Dearly beloved, we are gathered here today to get through this thing called life." – Prince',
  '"Instead of hate, celebrate." – Prince',
  '"Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away." -Frida Kahlo',
  '"Passion is the bridge that takes you from pain to change." -Frida Kahlo',
  '"At the end of the day, we can endure much more than we think we can." -Frida Kahlo',
  '"I am my own muse. I am the subject I know best. The subject I want to better." -Frida Kahlo',
  '"I think that little by little I`ll be able to solve my problems and survive." -Frida Kahlo',
  '"Do not be afraid of your difficulties.Do not wish you could be in other circumstances than you are. For when you have made the best of an adversity, it becomes the stepping stone to a splendid opportunity." -Helena Blavatsky',
  '"Matter is spirit at its lowest level. Spirit is matter at its highest level." Helena Blavatsky',
  '"Be humble, if thou would`st attain to wisdom. Be humbler still, when wisdom thou hast mastered." -Helena Blavatsky',
  '"Listen with ears of tolerance! See through the eyes of compassion! Speak with the language of love" -Rumi',
  '"If you are always trying to be normal you will never know how amazing you can be." -Maya Angelou',
  '"We cannot solve our problems with the same thinking we used when we created them." -Albert Einstein',
  '"A person who never made a mistake never tried anything new." -Albert Einstein',
  '"Lovely days don`t come to you, you should walk to them." -Rumi',
  '"Always remember you are braver than you believe, stronger than you seem, smarter than you think and twice as beautiful as you`d ever imagined. Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself" -Rumi',
  '"Our wounds are often the openings into the best and most beautiful part of us." David Richo',
  '"Think of your head as an unsafe neighborhood; don`t go there alone." Augusten Burroughs',
  '"Every child born has innate goodness." Chinese Proverb'
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

function JournalEntry() {
  const [journalData, setJournalData] = useState(null);
  const history = useHistory();
  const { setLoading, currentUser } = useContext(AppContext);
  console.log(journalData);

  const handleChange = (e) => {
    setJournalData({ ...journalData, [e.target.name]: e.target.value });
  };

  const handleJournalSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    axios
      .post('/api/journal', journalData, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res);
        form.reset();
        swal(' Your Journal has been saved!');
        history.push('/calendar');
      })

      .catch((error) => {
        swal('Something went wrong, try again');
      });
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <Container id="journalimage">
      <div className="quotecontainer">
        <div>
          <button className="inspiredbutton" onClick={refreshPage}>
            Stay Inspired
          </button>
        </div>

        <em>{quote}</em>
      </div>
      <div id="journal1">
        <div>
          <h1 id="journaltitle" style={{ color: '#988282' }}>
            Journal
          </h1>
          <blockquote>
            Make an entry to remember what lead you to feel this way today.
          </blockquote>
        </div>
        <Form onSubmit={handleJournalSubmission}>
          <Form.Group controlId="JournalSubmitionForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Journal Title"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            style={{ opacity: '0.6' }}
            controlId="exampleForm.ControlMood1"
          >
            <Form.Label></Form.Label>
            <Form.Control as="select" name="mood" onChange={handleChange}>
              <option value="happy">Mood:</option>
              <option value="sad">Sad</option>
              <option value="grumpy">Grumpy</option>
              <option value="motivated">Motivated</option>
              <option value="excited">Excited</option>
              <option value="bored">Bored</option>
              <option value="indifferent">Indifferent</option>
            </Form.Control>

            <Form.Control
              placeholder="Journal Body:"
              as="textarea"
              rows="3"
              name="body"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            style={{
              marginLeft: '200px'
            }}
            variant="primary"
            type="submit"
          >
            Save your Entry!
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default JournalEntry;
