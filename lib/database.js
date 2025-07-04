import { db } from './firebase';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: new Date(),
      status: 'new'
    });
    console.log('Contact form submitted with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    return { success: false, error: error.message };
  }
};

// Get all contact submissions (for admin)
export const getContactSubmissions = async () => {
  try {
    const q = query(
      collection(db, 'contacts'), 
      orderBy('timestamp', 'desc'), 
      limit(100)
    );
    const querySnapshot = await getDocs(q);
    const contacts = [];
    querySnapshot.forEach((doc) => {
      contacts.push({ id: doc.id, ...doc.data() });
    });
    return contacts;
  } catch (error) {
    console.error('Error getting contacts: ', error);
    return [];
  }
};

// Product management
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding product: ', error);
    return { success: false, error: error.message };
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error getting products: ', error);
    return [];
  }
};

// Newsletter subscription
export const subscribeNewsletter = async (email) => {
  try {
    const docRef = await addDoc(collection(db, 'newsletter'), {
      email,
      subscribedAt: new Date(),
      status: 'active'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error subscribing to newsletter: ', error);
    return { success: false, error: error.message };
  }
};
